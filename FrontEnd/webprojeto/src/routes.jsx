import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Contatos from './pages/Contatos';
import Parcerias from './pages/Parcerias';
import CadastroPet from './pages/CadastroPet';
import Duvidas from './pages/Duvidas';


function RoutesApp() {
 const [isRegistered, setIsRegistered] = useState(false);
 // Função para atualizar o estado de cadastro
 const handleRegister = () => {
   setIsRegistered(true);
 };
 return (
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/usuario" element={<Usuario />} />
<Route path="/cadastroPet" element={<CadastroPet />} />
<Route path="/duvidas" element={<Duvidas />} />
<Route path="/contatos" element={<Contatos />} />
<Route path="/parcerias" element={<Parcerias />} />


       {!isRegistered && (
<Route
           path="/usuario"
           element={<Usuario onRegister={handleRegister} />}
         />
       )}
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