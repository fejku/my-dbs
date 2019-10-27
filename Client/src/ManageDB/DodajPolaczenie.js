//TODO: Dodanie walidacji czy taki serwer nie jest już dodany
import React, { useState } from 'react'

function DodajPolaczenie(props) {

  const [polaczenie, setPolaczenie] = useState({
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
  });

  function zamknijDodawanie() {
    props.setDodawanie(false);
  }

  function handleInputChange(e) { 
    const target = e.target;
    const {value, name} = target;

    setPolaczenie({ ...polaczenie, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:5000/manage-db/polaczenia', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(polaczenie),
    }).then(result => result.json())
      .then(result => {
        console.log(result)
        props.setDodano(true);
      });

    zamknijDodawanie();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Host</span>
        </div>
        <input 
          name="host"
          type="text" 
          className="form-control" 
          value={polaczenie.host}
          onChange={handleInputChange} />
      </div>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Port</span>
        </div>
        <input 
          name="port"
          type="number" 
          min="1"
          max="65535"
          className="form-control" 
          value={polaczenie.port}
          onChange={handleInputChange} />
      </div>            
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Username</span>
        </div>
        <input 
          name="username"
          type="text" 
          className="form-control" 
          value={polaczenie.username}
          onChange={handleInputChange} />
      </div>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Password</span>
        </div>
        <input 
          name="password" 
          type="password" 
          className="form-control" 
          placeholder="Password" 
          value={polaczenie.password}
          onChange={handleInputChange} />
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-outline-success mr-2">Dodaj</button>
        <button type="button" className="btn btn-outline-danger" onClick={zamknijDodawanie}>Anuluj</button>
      </div>      
  </form>
  )
}

export default DodajPolaczenie
