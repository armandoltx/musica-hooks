import React from 'react';

function Informacion({ info }) {

  // PAra prevenir que se cargu este componente sin info esta vacio.
  // como info es un objeto pordemos usar Object.keys(info)
  if(Object.keys(info).length === 0 ) return null;

  return(
    <div className="card border-light">
      <div className="card-header bg-primary-text-light-font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <img src={info.strArtistThumb} alt="Logo Artista"/>
        <p className="card-text">Genero: {info.strGenre}</p>
        <p className="card-text text-center">Biografia</p>
        <p className="cart-text">{info.strBiographyEN}</p>
        <p className="cart-text">
          <a href="{`https://${info.strFacebook}`}" target='_blank'rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="{`https://${info.strTwitter}`}" target='_blank'rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="{info.strLastFMChart}" target='_blank'rel="noopener noreferrer">
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Informacion;