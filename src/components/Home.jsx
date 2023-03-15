import { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

import './Home.css';
import gitlogo from '../assets/github.svg';

export default function Home() {
  const [ tipo, setTipo ] = useState('');
  const navigate = useNavigate();

  async function verificarRepos(repositorio) {
    await axios.get(`https://api.github.com/search/repositories?q=${repositorio}`).then(response => {
      if (response.data.total_count > 0){
        navigate(`/Repositorios/${repositorio}`)
      } else {
        document.getElementById('ModalContainer').classList.add("ModalAberto")
      }
    })
  }
  // Função que retornar a quantidade de items encontrados para dar erro ou redirecionar para a página que mostra os usuários
  async function verificarUsers(usuario) {
    await axios.get(`https://api.github.com/search/users?q=${usuario}`).then(response => {
      if (response.data.total_count > 0){
        navigate(`/Usuarios/${usuario}`)
      } else {
        document.getElementById('ModalContainer').classList.add("ModalAberto")
      }
    })
  }

  function handleButtonClick(tipo, tipoalternado){
    setTipo(tipo)
    document.getElementById(tipo).classList.add("botaoSelecionado")
    document.getElementById(tipoalternado).classList.remove("botaoSelecionado")
  }

  function handleSubmit(e){
    e.preventDefault()
    //  Verificar busca:
    if (tipo === 'repos') { verificarRepos(e.target[0].value) }
    if (tipo === 'users') { verificarUsers(e.target[0].value) }
  }

  useEffect(() => {
    setTipo('repos')
    document.getElementById('repos').classList.add("botaoSelecionado")
  }, [])

  return (
    <div className="HomeContainer">
      <Modal />
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

        <input type="text" className='caixaProcura' placeholder='Buscar...' />

      </form>

    </div>
  );
}