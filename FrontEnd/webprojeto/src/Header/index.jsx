import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import imagem from './logoume.jpg';
function Header({ isLoggedIn, onLogout }) {
 const navigate = useNavigate(); // Hook para navegar programaticamente
 const handleLogout = () => {
   onLogout(); // Chama a função que atualiza o estado de login
   navigate('/'); // Redireciona para a página Home
 };
 return (
<header>
<Link to="/" className="logoum">
<img src={imagem} className="logoimagem" alt="Logo" />
</Link>
<Link to="/" className="Home">Home</Link>
<Link to="/duvidas" className="Dúvidas">Dúvidas</Link>
<Link to="/parcerias" className="Parcerias">Parcerias</Link>
     {isLoggedIn ? (
<>
<Link to="/CadastroPet" className="CadastroPet">Cadastro do Pet</Link>
<Link to="/AgenVis" className="AgenVis">Agendamento do Pet</Link>
<Link to="/Funcionario" className="Funcionario">Funcionário</Link>

<button onClick={handleLogout} className="Sair">Sair</button>
</>
     ) : (
<>
<Link to="/login" className="Login">Login</Link>
<Link to="/usuario" className="Cadastro">Cadastro do Usuario</Link>


<Link to="/listaPets" className="Funcionario">Lista Pets</Link>

</>
     )}
</header>
 );
}
export default Header;