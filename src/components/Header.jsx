import { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

export default function Header() {

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
        <Link className='HeaderLink' to="/" id='inicio'>INÍCIO</Link>
        <Link className='HeaderLink' to="/Favoritos" id='favoritos'>FAVORITOS</Link>
      </div>
    </div>
  );
}