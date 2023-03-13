import axios from 'axios';
import { useEffect } from 'react';
import './Usuarios.css';

export default function Usuarios(props) {

    // axios.get(`https://api.github.com/search/users?q=${props}`).then(response => {
    //   console.log(response)
    // })

  useEffect(() => {
    console.log(props)
    return () => {
    }
  }, [])

  return (
    <div className="UsuariosContainer">
      Resposta dos usuários procurados
    </div>
  );
}