import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
import Favoritos from './components/Favoritos';
import Repositorios from './components/Repositorios';
import NaoEncontrado from "./components/NaoEncontrado";

import {FavoritosStorage} from './components/Context/FavoriteContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <FavoritosStorage>
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
      </FavoritosStorage>
    </div>
  );
}

export default App;
