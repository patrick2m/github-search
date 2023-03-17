import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Repositorios.css';

import blackstar from "../assets/star-black.svg"
import StarButton from './Context/StarButton';

export default function Repositorios() {
  const params = useParams();
  const [ listaRepositorios, setListaRepositorios] = useState([])
  
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
            const repo = {
              id: repositorio.id,
              name: repositorio.name,
              description: repositorio.description,
              stars: repositorio.stargazers_count,
            }
            return (
              <div
                key={repo.id}
                className='Repositorios'
              >
                <div className='Repositorio'>
                  <h1 className='RepositorioTitulo'>{repo.name}</h1>
                  <p className='RepositorioSubtitulo'>{repo.description}</p>
                  <div className='RepositorioStars'>
                    <img src={blackstar} alt="Curtidas" className='RepositorioStar' />
                    <p>{repo.stargazers_count}</p>
                  </div>
                </div>
                <div className='FavoritoContainer'>
                  <StarButton repositorio={repo} />
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