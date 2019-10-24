import React, { useState } from 'react';
import Polacz from './Polacz';
import DodajPolaczenie from './DodajPolaczenie';

function ManageDB(props) {

  const [polaczenie, setPolaczenie] = useState("?");
 
  return (
    <Polacz polaczenie={[polaczenie, setPolaczenie]} />
  )
}

export default ManageDB;