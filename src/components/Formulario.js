import React, { useState } from 'react';

function Formulario({ consultarAPILetra }) {

  // el state inicia como un objeto vacio para acceder a los valores del formulario
  const [busqueda, agregarBusqueda] = useState({
    artista: '',
    cancion: ''
  })
  // el name del formulario tiene que ser igaual al nombre del state para que funcione la tecnica q usamos para leer el state de forma sencilla.

  const [error, guardarError] = useState(false);

  // extraemos artista y cancion y lo colocamos como los values de los inputs:

  const { artista, cancion } = busqueda;



  // funcion a cada input para leer su contenido y para actualizar el state de los inputs
  const actualizarState = (e) => {
    // le pasamos un evento e para acceder a los valores del formulario
    // utilizamos la funcion para actualizar el state:
    agregarBusqueda({
      // tomamos una copia de lo q hay en el state para no modificarlo y solo anadir datos
      ...busqueda,
      [e.target.name] : e.target.value
      // el name que esta en el formulario (ej: name="artista") tiene q coincidir con el key del state "artista"
    })
    // para comprobar q funciona:
    // console.log(busqueda);
  } // el siquiente paso es anadirla a los inputs en los cuales queremos actualizar el state

  // cuando hacemos submit al form consulramos las APIS
  const enviarInformacion = (event) => {
    // se presenta un evento que no queremos que ocurra
    event.preventDefault();

    // VALIDAMOS
    if(artista.trim() === '' || cancion.trim() === '') {
      guardarError(true);
    }

    guardarError(false);

    // pasamos la funcion que tenemos en App => consulratAPILetra
    // anadimos props cuando definimos la funcion Formulario(props) podemos hacer destructuring y quitar props
    consultarAPILetra(busqueda); // pasamos busqueda a esta funcion y asi pasamos los datos a App.js
  }

  return(
    <div className="bg-info">
      {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
        <div className="container">
            <div className="row">
                <form
                  onSubmit={enviarInformacion} // se suele llamar hadleSumbit
                  className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                    <fieldset>
                        <legend className="text-center">Buscador Letras Canciones</legend>
                        <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label>Artista</label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      name="artista"
                                      placeholder="Nombre Artista"
                                      onChange={actualizarState}
                                      value={artista}
                                      required
                                  />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label>Canción</label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      name="cancion"
                                      placeholder="Nombre Canción"
                                      onChange={actualizarState}
                                      value={cancion}
                                      required
                                  />
                              </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Buscar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Formulario;