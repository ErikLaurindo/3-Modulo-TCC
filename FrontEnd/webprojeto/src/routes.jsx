import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Contatos from './pages/Contatos';
import Parcerias from './pages/Parcerias';
import CadastroPet from './pages/CadastroPet';
import Duvidas from './pages/Duvidas';
import AgenVis from './pages/AgenVis';
import Login from './pages/Login';
import Funcionario from './pages/Funcionario';
import ListaPets from './pages/ListarPets';

import Header from './Header'; // Importando diretamente de Header.jsx
function RoutesApp() {
 const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
 const handleLogin = () => {
   setIsLoggedIn(true); // Atualiza o estado de login quando o login é bem-sucedido
 };
 const handleLogout = () => {
   setIsLoggedIn(false); // Atualiza o estado de login quando o usuário clica em "Sair"
 };
 return (
<BrowserRouter>
<Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/usuario" element={<Usuario />} />
<Route path="/cadastroPet" element={<CadastroPet />} />
<Route path="/duvidas" element={<Duvidas />} />
<Route path="/contatos" element={<Contatos />} />
<Route path="/parcerias" element={<Parcerias />} />
<Route path="/agenVis" element={<AgenVis />} />
<Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Passa a função para Login */}
<Route path="/funcionario" element={<Funcionario />} />
<Route path="/listaPets" element={<ListaPets />} />
</Routes>
</BrowserRouter>
 );
}
export default RoutesApp;

//<Route path="/listausuario" element={<ListaUsuario/>}/>

/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Usuario from './components/Usuario';
import Home from './components/Home';
import Duvidas from './components/Duvidas';
import Parcerias from './components/Parcerias';
const RoutesApp = ({ isRegistered, onRegister }) => {
 return (
<Router>
<Header isRegistered={isRegistered} />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/usuario" element={<Usuario onRegister={onRegister} />} />
<Route path="/duvidas" element={<Duvidas />} />
<Route path="/parcerias" element={<Parcerias />} />
</Routes>
</Router>
 );
};
export default RoutesApp;*/