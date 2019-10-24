import React from 'react'

function DodajPolaczenie(props) {

  function handleSubmit() {
    props.setDodawanie(false);
  }

  return (
    <div>
      Dodaj 
      <form onSubmit={handleSubmit}>
        <button>Dodaj</button>
      </form>
    </div>
  )
}

export default DodajPolaczenie
