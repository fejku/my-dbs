import React, { useState, useEffect } from 'react'

function ListaBaz() {

  const [bazy, setBazy] = useState({
    result: [],
    aktualnaBaza: "?",
  });

  useEffect(() => {
    fetch("http://localhost:5000/manage-db/bazy")
      .then(response => response.json())
      .then(response => setBazy({
        result: response,
        aktualnaBaza: dajAktualnaBaze(response),
      }));
  }, [setBazy]);

  function dajAktualnaBaze(bazy) {
    return bazy[0];
  }  

  const optionsBazy = bazy.result.map(baza => {
    return <option name={baza} key={baza}>{baza}</option>
  })

  return (
    <div className="row">
      <div className="col">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label htmlFor="sel" className="input-group-text">Bazy</label>
          </div>
          <select name="" id="sel" className="custom-select">
            {optionsBazy}
          </select>
        </div>
      </div>      
    </div>
  )
}

export default ListaBaz
