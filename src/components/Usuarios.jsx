import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Usuarios.css';

export default function Usuarios() {
  const [ listaUsuarios, setListaUsuarios ] = useState([])
  const params = useParams();
  
  useEffect(() => {
    axios.get(`https://api.github.com/search/users?q=${params.nome}`).then(response => {
      setListaUsuarios(response.data.items)
    })
  }, [params.nome])

  return (
    <div className="UsuariosContainer">
      {listaUsuarios.map((usuario) => {
        return (
          <Link className='UsuarioLink' key={usuario.id} to={`/Usuario/${usuario.login}`}>
            <div className='Usuarios' key={usuario.id}>
              <img className='UsuariosProfilePic' src={usuario.avatar_url} alt={usuario.name} />
              <span className='UsuariosNome'>{usuario.login}</span>
            </div>
          </Link>
        )
      })}
    </div>
  );
}