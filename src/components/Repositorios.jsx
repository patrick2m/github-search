import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Repositorios.css';

import blackstar from "../assets/star-black.svg"
import yellowstar from "../assets/star-black.svg"

export default function Repositorios() {
  const params = useParams();
  const [ listaRepositorios, setListaRepositorios] = useState([])
  

  useEffect(() => {
    axios.get(`https://api.github.com/search/repositories?q=${params.nome}`).then(response => {
      setListaRepositorios(response.data.items)
    })
    console.log(listaRepositorios[0])
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
                  <img src={blackstar} alt="Curtir" className='RepositorioCurtir'/>
                  <img src={yellowstar} alt="Curtir" className='RepositorioCurtir'/>
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