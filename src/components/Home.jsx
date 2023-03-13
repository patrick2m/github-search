import { useState } from 'react';

import './Home.css';

import gitlogo from '../assets/Vector.png'

export default function Home() {
  // const [ buscaAprovada, setBuscaAprovada ] = useState(false);

  //  Função que retornar a quantidade de items encontrados para dar erro ou redirecionar para a página que mostra os usuários
  //  function verificaBusca() {
  //    axios.get(`https://api.github.com/search/users?q=${usuario}`).then(response => {
  //    if (response.data.total_count > 0) {
  //      setBuscaAprovada(true)
  //    } else {
  //      setBuscaAprovada(false)
  //    }
  //    { setBuscaAprovada ? 
  //      ir para a página com o nome o usuário : 
  //      Abrir modal de erro
  //     }
  //    })
  //  }

  // Função que retornar a quantidade de items encontrados para dar erro ou redirecionar para a página que mostra os usuários
  // function verificaBusca() {
  //   axios.get(`https://api.github.com/search/users?q=${usuario}`).then(response => {
  //   setUsers(response.data.total_count)
  //   console.log(users)
  //   })
  // }

  function handleSubmit(e){
    e.preventDefault()
    //verificar busca:
    // if (e.tipo ==== 'repos') { verificarRepos(e.input.value) }
    // if (e.tipo ==== 'users') { verificarUsers(e.input.value) }

    console.log(e)

    return {
    }
  }

  return (
    <div className="HomeContainer">
      <img src={gitlogo} alt="Github" className='GitLogo' />
      
      <form 
        onSubmit={handleSubmit} 
        className="HomeForm"
      >
        {/* <div className='opcoes'>
          <input type="radio" name="tipo" id="repos" />
          <input type="radio" name="tipo" id="users" />
          <input name="repos" id="tipo">Repositórios</input>
          <input name="users" id="tipo">Usuários</input>
        </div> */}

        <input type="text" placeholder='Buscar...' />

      </form>
    
    </div>
  );
}