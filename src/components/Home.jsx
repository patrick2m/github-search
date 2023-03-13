import { useState } from 'react';

import './Home.css';

import gitlogo from '../assets/Vector.png';
import axios from 'axios';

export default function Home() {
  const [ tipo, setTipo ] = useState('');

  // Função que retornar a quantidade de items encontrados para dar erro ou redirecionar para a página que mostra os usuários
  async function verificarUsers(usuario) {
    await axios.get(`https://api.github.com/search/users?q=${usuario}`).then(response => {
      console.log(response)
      { response.data.total_count > 0 ? 
        (
          console.log('Tem respostas') 
        ) : (
          console.log('Não tem respostas')
        )
      }
    })
  }

  function verificarRepos(repositorio) {
    axios.get(`https://api.github.com/search/users?q=${repositorio}`).then(response => {

    })
  }

  function handleButtonClick(tipo, tipoalternado){
    setTipo(tipo)
    document.getElementById(tipo).classList.add("botaoSelecionado")
    document.getElementById(tipoalternado).classList.remove("botaoSelecionado")
  }

  function handleSubmit(e){
    e.preventDefault()
  //    Verificar busca:
    if (tipo === 'repos') { verificarRepos(e.target[0].value) }
    if (tipo === 'users') { verificarUsers(e.target[0].value) }
  }

  return (
    <div className="HomeContainer">
      <img src={gitlogo} alt="Github" className='GitLogo' />

      <form
        onSubmit={handleSubmit}
        className="HomeForm"
      >
        <div className='opcoes'>
          <div
            className='botaoTipo'
            onClick={(e) => { e.preventDefault(); handleButtonClick('repos','users')}}
            id='repos'
          >
            Repositórios
          </div>
          <div
            className='botaoTipo'
            onClick={(e) => { e.preventDefault(); handleButtonClick('users','repos')}}
            id='users'
          >
            Usuários
          </div>
        </div>

        <input type="text" placeholder='Buscar...' />

      </form>

    </div>
  );
}