import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Usuario.css';

export default function Usuario() {
  const params = useParams();
  const [usuario, setUsuario] = useState();
  const [usuarioRepos, setUsuarioRepos] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${params.nome}`).then(response => {
      setUsuario(response.data)
    });
    axios.get(`https://api.github.com/users/${params.nome}/repos?direction=desc`).then(response => {
        setUsuarioRepos(response.data)
    });
  }, [params.nome])

  return (
    <div className="UsuarioContainer">
      <div className='UsuarioProfile'>
        {usuario ? (
          <>
            <img src={usuario.avatar_url} alt="" />
            <p>{usuario.name}</p>
            <p>{usuario.login}</p>
            <p>{usuario.company}</p>
            <p>{usuario.location}</p>
            <p>{usuario.public_repos}</p>
            <p>{usuario.followers}</p>
          </>
        ) : (
          <p>Carregando...</p>
        )
        }
      </div>
      <div className='UsuarioRepositoriosContainer'>
        {usuarioRepos.map((repositorio) => {
          return (
            <div key={repositorio.id} className="UsuarioRepositorio">
              <div className='UsuarioHeader'>
                <h1>{repositorio.name}</h1>
                <p>Estrela</p>
              </div>
              <p>{repositorio.description}</p>
              <p>{repositorio.stargazers_count}</p>
              <p>{repositorio.created_at}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}