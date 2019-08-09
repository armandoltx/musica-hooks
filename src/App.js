import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';

function App() {
  // Se se puede utilizar useState de 2 formas distintas, usar cada state por separado o crear un arreglo.
  // en este caso vamos a utilizar los states por separado: el artista, la letra (q viene de al API) y la informacion del grupo
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]); // es un arreglo pq lo vemos en la API
  const [info, agregarInfo] = useState({});

  // Crear metodo para consultar la API de Letras de Canciones
  const consultarAPILetra = async (busqueda) => { // aqui lo podemos llamar como queramos el parametro pero usaremos busqueda
    //console.log('dentro de consultarAPILetra en App.js ', busqueda);
    const {artista, cancion} = busqueda; // aplicando destructuring
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

    // usar axios
    const resultado = await axios(url);

    //console.log(resultado.data.lyrics);

    // alamcenar la letra en el state
    agregarLetra(resultado.data.lyrics);

  }
  return (
    <Fragment>
      <Formulario consultarAPILetra={consultarAPILetra} />

      <div className="container mt-5">
        <div lassName="row">
          <div className="col-md-6">HERE</div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
