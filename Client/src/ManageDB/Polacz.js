import React, { useState, useEffect } from 'react'
import DodajPolaczenie from './DodajPolaczenie';
import ListaBaz from './ListaBaz';

function Polacz(props) {

  const [dodawanie, setDodawanie] = useState(false);

  const [polaczenia, setPolaczenia] = useState({
    result: [],
    aktualnePolaczenie: "?",
  });

  const [czyPolaczono, setPolacz] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/manage-db/polaczenia")
      .then(response => response.json())
      .then(response => setPolaczenia({
        result: response,
        aktualnePolaczenie: dajAktualnePolacznie(response),
      }));
  }, [setPolaczenia]);
  
  function handleDodajPolaczenie() {
    setDodawanie(state => !state);
  }

  function handleZmienPolaczenia(e) {
    setPolaczenia({ ...polaczenia, aktualnePolaczenie : e.target.value });
  }

  function dajAktualnePolacznie(polaczenia) {
    return polaczenia.find(polaczenie => polaczenie.aktualne).id;
  }

  function handlePolacz() {
    setPolacz(true);
    // Pobiera bazy z zaznaczonego połączenia
    // Tworzy selecta z bazami
  }

  const optionsPolaczenia = polaczenia.result.map(polaczenie => {
    return <option value={polaczenie.id} key={polaczenie.id}>{polaczenie.host + ":" + polaczenie.port}</option>
  });

  return (
    <div >
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label htmlFor="sel" className="input-group-text">Połączenie</label>
            </div>
            <select name="" id="sel" className="custom-select" onChange={handleZmienPolaczenia} value={polaczenia.aktualnePolaczenie}>
              {optionsPolaczenia}
            </select>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleDodajPolaczenie}>+</button>
              <button className="btn btn-outline-secondary" type="button" onClick={handlePolacz}>Połącz</button>
            </div>
          </div>
        </div>
      </div>
      { dodawanie ? <DodajPolaczenie setDodawanie={setDodawanie} /> : null }
      { czyPolaczono ? <ListaBaz polaczenie={polaczenia.result[polaczenia.aktualnePolaczenie]} /> : null }
    </div>
  )
}

export default Polacz;
