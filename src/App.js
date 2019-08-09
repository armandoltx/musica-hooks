import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';

function App() {
  // Se se puede utilizar useState de 2 formas distintas, usar cada state por separado o crear un arreglo.
  // en este caso vamos a utilizar los states por separado: el artista, la letra (q viene de al API) y la informacion del grupo
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]); // es un arreglo pq lo vemos en la API
  const [info, agregarInfo] = useState({});

  // Crear metodo para consultar la API de Letras de Canciones
  const consultarAPILetra = (busqueda) => { // aqui lo podemos llamar como queramos el parametro pero usaremos busqueda
    console.log('dentro de consultarAPILetra en App.js ', busqueda);
  }
  return (
    <Fragment>
      <Formulario consultarAPILetra={consultarAPILetra} />

    </Fragment>
  );
}

export default App;
