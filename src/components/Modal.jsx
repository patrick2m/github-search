
import './Modal.css';

import iconeAtencao from '../assets/atencao.svg'

export default function Modal() {
  
  function ModalFechado() {
    const container = document.getElementById('ModalContainer')
    container.classList.add("ModalFechado");
    console.log("modal fechado")
  }

  return (
    <div id="ModalContainer" className='MOdalFechado'>
      <div className='AvisoModal'>
        <div className='ConteudoModal'>
          <img src={iconeAtencao} alt="Atenção" />
          <h1>Desculpe!</h1>
          <p>Não foi possível encontrar o repositório ou usuário desejado!</p>
          <button onClick={ModalFechado}>Certo</button>
        </div>      
      </div>
    </div>
  );
}