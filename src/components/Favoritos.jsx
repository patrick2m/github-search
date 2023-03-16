
import './Favoritos.css';
import {FavoritosContext} from './Context/FavoriteContext';

import gitlogo from '../assets/github.svg'
import { useContext, useEffect } from 'react';

export default function Favoritos() {
  const favoritos = useContext(FavoritosContext);
  
  useEffect(() => {
    console.log(favoritos.listaFavoritos)

    return () => {
    }
  }, [])
  
  return (
    <div className="FavoritosContainer">
      <div className='FavoritosHeader'>
        <img src={gitlogo} alt="github" className='githeader'/>
        <h1>Repositórios Favoritos</h1>
      </div>
      <div>
        Inserir repositórios favoritos aqui puxando do local storage os links
      </div>      
    </div>
  );
}