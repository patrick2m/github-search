import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favoritos from './components/Favoritos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Usuarios" element={<Users />}/>
        <Route path="/Usuario" element={<User />}/>
        <Route path="Favoritos" element={<Favoritos />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
