import React, { useState, useEffect } from 'react';

function WersjePumy({wersjaPumy}) {
  
  const [wersjePumy, setWersjePumy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/manage-db/wersje-pumy")
      .then(result => result.json())
      .then(result => {
        setWersjePumy(result);
        wersjaPumy.setWersjaPumy(result[0].id.toString());
      });
  }, [])

  const optionsWersjePumy = wersjePumy.map(({id, wersja}) => 
    <option value={id} key={id}>{wersja}</option>
  );

  return (
    <div className="row">
      <div className="col">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">Wersja pumy</label>
          </div>
          <select className="custom-select" name="" id="" value={wersjaPumy.wersjaPumy} onChange={e => wersjaPumy.setWersjaPumy(e.target.value)}>
            {optionsWersjePumy}
          </select>
        </div>
      </div>
    </div>
  )
}

export default WersjePumy;