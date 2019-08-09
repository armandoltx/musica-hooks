import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';

function App() {
  // Se se puede utilizar useState de 2 formas distintas, usar cada state por separado o crear un arreglo.
  // en este caso vamos a utilizar los states por separado: el artista, la letra (q viene de al API) y la informacion del grupo
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]); // es un arreglo pq lo vemos en la API
  const [info, agregarInfo] = useState({});
  return (
    <Fragment>
      <Formulario />

    </Fragment>
  );
}

export default App;
