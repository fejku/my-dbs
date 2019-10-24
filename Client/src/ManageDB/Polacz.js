import React, { useState, useEffect } from 'react'
import DodajPolaczenie from './DodajPolaczenie';

function Polacz(props) {

  const [dodawanie, setDodawanie] = useState(false);

  const [polaczenie, setPolaczenie] = props.polaczenie;
  
  function handleDodajPolaczenie() {
    setDodawanie(state => !state);
  }

  function handleZmienPolaczenie(e) {
    console.log('1: ' + polaczenie);
    setPolaczenie(e.target.value);
    console.log('2: ' + polaczenie);    
  }

  function dodajPolaczenie() {
    if (dodawanie) {
      return <DodajPolaczenie />
    }
    return null;
  }

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label htmlFor="sel" className="input-group-text">Połączenie</label>
              </div>
              <select name="" id="sel" className="custom-select" onChange={handleZmienPolaczenie} value={polaczenie}>
                <option value={null} key={null}>Wybierz</option>
                <option value="1" key="1">1</option>
                <option value="2" key="2">2</option>
              </select>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={handleDodajPolaczenie}>+</button>
                <button className="btn btn-outline-secondary" type="button" onClick={handleDodajPolaczenie}>Połącz</button>
              </div>

            </div>
          </div>
        </div>
        { dodawanie ? <DodajPolaczenie setDodawanie={setDodawanie} /> : null }
      </div>      
    </div>
  )
}

export default Polacz;
