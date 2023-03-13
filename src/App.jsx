import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';

import { BrowserRouter } from "react-router-dom";
import Favoritos from './components/Favoritos';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Home path="/Inicio" element={<Home />} />
        <Users path="/Usuarios" element={<Users />}/>
        <Favoritos path="Favoritos" element={<Favoritos />}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
