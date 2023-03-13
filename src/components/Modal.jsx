
import './Modal.css';

import iconeAtencao from '../assets/atencao.svg'

export default function Modal() {
  
  function FecharModal() {
    document.getElementById('ModalContainer').classList.remove("ModalAberto");
  }

  return (
    <div id="ModalContainer">
      <div className='AvisoModal'>
        <div className='ConteudoModal'>
          <img src={iconeAtencao} alt="Atenção" />
          <h1>Desculpe!</h1>
          <p>Não foi possível encontrar o repositório ou usuário desejado!</p>
          <button onClick={FecharModal}>Certo</button>
        </div>      
      </div>
    </div>
  );
}