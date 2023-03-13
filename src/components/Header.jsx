import { useEffect } from 'react';
import './Header.css';

export default function Header() {
  function handleClick(event) {
    event.preventDefault();
    return {

    }
  };

  function verificaLocal() {
    
    return {

    }
  };
    
  useEffect(() => {
    verificaLocal();

    return () => {
    };
  }, []);

  return (
    <div className="HeaderContainer">
      <div className='HeaderLogo'>
        <span className='HeaderLogoText'>
          <strong>Github</strong>
          Search
        </span>
      </div>

      <div className='HeaderLinks'>
        <span onClick={(event) => handleClick(event)}>INÍCIO</span>
        <span>FAVORITOS</span>
      </div>
    </div>
  );
}