import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';

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

    // almacenar el artista que se busco
    agregarArtista(artista);

  }

  // Crear metodo para consultar la API de Informacion de la banda o grupo

  const consultarAPIInfo = async () => {
    // como la api nada mas cargar hace una consulta, para prevenir esto, cambiamos todo el codigo yu q ocurra si hay un artista:
    if(artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const resultado = await axios(url);

      // console.log(resultado.data.artists[0]);
      agregarInfo(resultado.data.artists[0]);

      console.log(info); // ahora podemos ver el state q se ha cambiado en la funcion anterior
    }
  }

  useEffect(
    () => {
      //console.log('Agregaste un artista');
      consultarAPIInfo();
    }, [artista] // este viene del state, y los cambios vienen de consultarAPILetra
  );



  return (
    <Fragment>
      <Formulario consultarAPILetra={consultarAPILetra} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion
              info={info}
            />
          </div>
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
