import React, { useState, useEffect } from 'react';
import Polacz from './Polacz';

function ManageDB(props) {

  const [ostatnioUzyte, setOstatnioUzyte] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/manage-db/ostatnio-uzyte")
      .then(result => result.json())
      .then(result => setOstatnioUzyte(result))
  }, []);
 
  return (
    <div>
      {ostatnioUzyte && <Polacz ostatnioUzyte={ostatnioUzyte} />}    
    </div>
  )
}

export default ManageDB;