
import './StarButton.css';
import {FavoritosContext} from './FavoriteContext';

import { useContext, useEffect, useState } from 'react';

import blackstar from '../../assets/star-black.svg'
import yellowstar from '../../assets/star-yellow.svg'



export default function StarButton(repositorio) {
  const [ existe, setExiste ] = useState(false);
  
  const [ listaFavoritosLocal, setListaFavoritosLocal ] = useState([]);
  
  useEffect(() => {
    // console.log(listaFavoritosLocal)
    
    return () => {
    }
  }, [])
  
  
  function alterarFavorito( repositorio ){
    console.log(listaFavoritosLocal)
    console.log(repositorio)
    
    setListaFavoritosLocal( listaFavoritosLocal.push(repositorio) )
    setListaFavoritosLocal( listaFavoritosLocal => [ ...listaFavoritosLocal, repositorio ] )

    // if ( listaFavoritosLocal.includes(repositorio) ) {
    //   setListaFavoritosLocal(
    //     listaFavoritosLocal.filter(
    //       (current) => current.id !== repositorio.id)
    //   )
    // } else {
    //   setListaFavoritosLocal( listaFavoritosLocal.push(repositorio) )
    //   // setListaFavoritosLocal( listaFavoritosLocal => [...listaFavoritosLocal, repositorio] )
    //   console.log(listaFavoritosLocal)
    // }
    // verificaExistencia();
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