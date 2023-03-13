import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
import Favoritos from './components/Favoritos';
import Repositorios from './components/Repositorios';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Usuarios/:nome" element={<Usuarios nome='' />}/>
          <Route path="/Repositorios" element={<Repositorios />}/>
          <Route path="/Usuario" element={<Usuario />}/>
          <Route path="/Favoritos" element={<Favoritos />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
