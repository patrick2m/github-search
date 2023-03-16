import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Repositorios.css';
import {FavoritosContext} from './Context/FavoriteContext';

import blackstar from "../assets/star-black.svg"
import StarButton from './Context/StarButton';

export default function Repositorios() {
  const params = useParams();
  const [ listaRepositorios, setListaRepositorios] = useState([])
  // const favoritos = useContext(FavoritosContext);
  
  useEffect(() => {
    axios.get(`https://api.github.com/search/repositories?q=${params.nome}&page=1`).then(response => {
      setListaRepositorios(response.data.items)
    })
    document.getElementById('inicio').classList.remove("localAtual")

  }, [listaRepositorios, params.nome])

  return (
    <div className="RepositoriosContainer">
      {listaRepositorios ? (
        <>
          {listaRepositorios.map((repositorio) => {
            return (
              <div
                key={repositorio.id}
                className='Repositorios'
              >
                <div className='Repositorio'>
                  <h1 className='RepositorioTitulo'>{repositorio.name}</h1>
                  <p className='RepositorioSubtitulo'>{repositorio.description}</p>
                  <div className='RepositorioStars'>
                    <img src={blackstar} alt="Curtidas" className='RepositorioStar' />
                    <p>{repositorio.stargazers_count}</p>
                  </div>
                </div>
                <div className='FavoritoContainer'>
                  <StarButton repositorio={`${repositorio.id},${repositorio.name},${repositorio.description},${repositorio.stargazers_count}`} />
                </div>
              </div>
            )
          })}
        </>
        ) : (
          <h1>Carregando...</h1>
        )
      }
    </div>
  );
}