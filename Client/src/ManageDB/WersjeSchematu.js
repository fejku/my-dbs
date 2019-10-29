import React, { useState, useEffect } from 'react';

function WersjeSchematu({wersjaPumy}) {

  const [wersjeSchematow, setWersjeSchematow] = useState([]);
  useEffect(() => {
    if (wersjaPumy) {
      fetch('http://localhost:5000/manage-db/wersje-schematow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(wersjaPumy),
      })
        .then(result => result.json())
        .then(result => setWersjeSchematow({wersjaPumy: result}));
    }
  }, [wersjaPumy])
  return (
    <div>resr</div>
  );
}

export default WersjeSchematu;