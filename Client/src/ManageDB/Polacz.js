import React, { useState, useEffect } from 'react'
import DodajPolaczenie from './DodajPolaczenie';
import ListaBaz from './ListaBaz';
import WersjePumy from './WersjePumy';
import WersjeSchematu from './WersjeSchematu';

function Polacz(props) {

  const [ostatnioUzyte, setOstatnioUzyte] = useState(props.ostatnioUzyte);
  const [polaczenia, setPolaczenia] = useState([]);
  const [czyDodawanie, setDodawanie] = useState(false);
  const [czyDodano, setDodano] = useState(false); 
  const [wersjaPumy, setWersjaPumy] = useState('');
  // const [wersjaSchematu, setWersjaSchematu] = useState(null);  

  useEffect(() => {
    fetch("http://localhost:5000/manage-db/polaczenia")
      .then(result => result.json())
      .then(result => setPolaczenia(result));
  }, [czyDodano]);
  
  function handleDodajPolaczenie() {
    setDodawanie(state => !state);
  }

  function handleZmienPolaczenia(e) {
    setOstatnioUzyte({ ...ostatnioUzyte, fk_pola: e.target.value });
  }

  function dajWybranePolaczenie() {
    return polaczenia.find(polaczenie => polaczenie.id.toString() === ostatnioUzyte.fk_pola);
  }

  const optionsPolaczenia = polaczenia.map(polaczenie => {
    return <option value={polaczenie.id} key={polaczenie.id}>{polaczenie.host + ":" + polaczenie.port}</option>
  });

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label htmlFor="sel" className="input-group-text">Połączenie</label>
            </div>
            <select name="" id="sel" className="custom-select" onChange={handleZmienPolaczenia} value={ostatnioUzyte.fk_pola}>
              {optionsPolaczenia}
            </select>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleDodajPolaczenie}>+</button>
            </div>
          </div>
        </div>
      </div>
      { czyDodawanie && <DodajPolaczenie setDodawanie={setDodawanie} setDodano={setDodano} />}
      <ListaBaz polaczenie={dajWybranePolaczenie()} />   
      <WersjePumy wersjaPumy={{wersjaPumy, setWersjaPumy}} />
      <WersjeSchematu wersjaPumy={wersjaPumy} />
    </div>
  )
}

export default Polacz;
