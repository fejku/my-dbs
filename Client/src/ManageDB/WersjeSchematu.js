import React, { useEffect } from 'react';

function WersjeSchematu({wersjaPumy, wersjeSchematow: {wersjeSchematow, setWersjeSchematow}}) {

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
        .then(result => setWersjeSchematow(result.sort((a, b) => (a.nazwa_schematu > b.nazwa_schematu) ? 1 : -1)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wersjaPumy])

  const handleZmienWersje = (e) => {
      const arr = [...wersjeSchematow];
      const index = arr.findIndex(wersja => wersja.nazwa_schematu === e.target.name);
      arr[index].wersja_schematu = e.target.value;
      setWersjeSchematow(arr);
  }

  const inputSchematy = wersjeSchematow.map(({nazwa_schematu, wersja_schematu}) => 
    <div className="col-sm-2" key={nazwa_schematu}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">{nazwa_schematu}</span>
        </div>
        <input 
          type="text" 
          className="form-control" 
          name={nazwa_schematu}
          value={wersja_schematu} 
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