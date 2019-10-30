import React, { useState, useEffect } from 'react';

function WersjeSchematu({wersjaPumy, wersjeSchematow}) {

  useEffect(() => {
    if (wersjaPumy) {     
      fetch('http://localhost:5000/manage-db/wersje-schematow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({wersjaPumy}),
      })
        .then(result => result.json())
        .then(result => wersjeSchematow.setWersjeSchematow(result));
    }
  }, [wersjaPumy])

  const handleZmienWersje = (e) => {
      const arr = [...wersjeSchematow.wersjeSchematow];
      const index = arr.findIndex(wersja => wersja.nazwa_schematu === e.target.name);
      arr[index].wersja_schematu = e.target.value;
      wersjeSchematow.setWersjeSchematow(arr);
  }

  const inputSchematy = wersjeSchematow.wersjeSchematow.map(wersjaSchematu => 
    <div className="col-sm-2">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">{wersjaSchematu.nazwa_schematu}</span>
        </div>
        <input 
          type="text" 
          className="form-control" 
          name={wersjaSchematu.nazwa_schematu}
          value={wersjaSchematu.wersja_schematu} 
          onChange={handleZmienWersje} 
        />
      </div>
    </div>
  );

  return (
    <div className="row">
      {inputSchematy}
    </div>
  );
}

export default WersjeSchematu;