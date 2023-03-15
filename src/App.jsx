import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
import Favoritos from './components/Favoritos';
import Repositorios from './components/Repositorios';
import NaoEncontrado from "./components/NaoEncontrado";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Usuarios/:nome" element={<Usuarios />}/>
          <Route path="/Repositorios/:nome" element={<Repositorios />}/>
          <Route path="/Usuario/:nome" element={<Usuario />}/>
          <Route path="/Favoritos" element={<Favoritos />}/>
          <Route path="/*" element={<NaoEncontrado />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
