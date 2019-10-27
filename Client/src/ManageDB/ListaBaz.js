import React, { useState, useEffect } from 'react';
import './ListaBaz.css';

function ListaBaz(props) {

  const [czyLadowanie, ustawLadowanie] = useState(true);
  const [bazy, ustawBazy] = useState([]);  
  const [czyBlad, ustawBlad] = useState(false);
  
  useEffect(() => {
    ustawLadowanie(true);
    ustawBlad(false);

    if (props.polaczenie) {
      fetch("http://localhost:5000/manage-db/bazy", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(props.polaczenie),
          }).then(response => response.json())
            .then(response => {
              if (response.error_code) {
                ustawLadowanie(false);
                ustawBazy([]);
                ustawBlad(true);
              } else {
                ustawLadowanie(false);
                ustawBazy(response);
                ustawBlad(false);
              }             
            });      
    }
  }, [props])

  const ladowanie = <div className="ladowanie">Ładowanie ...</div>;

  const blad = <div className="blad">Błąd połączenie z bazą danych</div>;

  const optionsBazy = bazy.map(baza => {
    return <option name={baza} key={baza}>{baza}</option>
  })

  const selectBazy = 
    <select name="" id="sel" className="custom-select">
      {optionsBazy}
    </select>;


  return (
    <div className="row">
      <div className="col">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label htmlFor="sel" className="input-group-text">Bazy</label>
          </div>
          {czyLadowanie && ladowanie}
          {czyBlad && blad}
          {!czyLadowanie && !czyBlad && selectBazy}          
        </div>
      </div>      
    </div>
  )
}

export default ListaBaz
