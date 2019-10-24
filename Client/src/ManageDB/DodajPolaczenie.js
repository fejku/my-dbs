import React from 'react'

function DodajPolaczenie(props) {

  function handleSubmit(e) {
    e.preventDefault();

    props.setDodawanie(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <button className="btn btn-primary">Dodaj</button>
  </form>
  )
}

export default DodajPolaczenie
