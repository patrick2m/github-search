
import './StarButton.css';
import {FavoritosContext} from './FavoriteContext';

import { useContext, useState } from 'react';

import blackstar from '../../assets/star-black.svg'
import yellowstar from '../../assets/star-yellow.svg'

export default function StarButton(repositorio) {
  const [ existe, setExiste ] = useState(false);
  const favoritos = useContext(FavoritosContext);

  function alterarFavorito( repositorio ){
    console.log(repositorio)
    if ( favoritos.listaFavoritos.includes(repositorio) ) {
    //   favoritos.setListaFavoritos(
    //     (current) => current.filter(
    //       (repositorio) => repositorio.id !== id
    //     )
    //   )
    // } else {
      favoritos.setListaFavoritos(favoritos.listaFavoritos.push(repositorio))
    }
    // verificaExistencia();
    console.log(favoritos.listaFavoritos)
  }

  // function verificaExistencia(){
  //   if ( favoritos.listaFavoritos.includes("objeto de teste") ) {
  //     setExiste(true)
  //   } else {
  //     setExiste(false)
  //   }
  // }


  return (
    <button 
      onClick={() => alterarFavorito(repositorio)} 
      className="StarButtonContainer"
    >
      {existe ? (
        <img src={yellowstar} alt="Favoritado" />
        ) : (
        <img src={blackstar} alt="Não Favoritado" />
      )
      }
    </button>
  );
}