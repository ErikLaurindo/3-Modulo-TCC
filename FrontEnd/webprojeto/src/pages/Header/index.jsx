import { Link } from 'react-router-dom';
import './header.css';
import imagem from './logoume.jpg';
function Header({ isRegistered }) {
 return (
<header>
<Link to="/" className="logoum"><img src={imagem} className="logoimagem" /></Link>
<Link to="/" className="Home">Home</Link>
<Link to="/duvidas" className="Dúvidas">Dúvidas</Link>
<Link to="/parcerias" className="Parcerias">Parcerias</Link>
<Link to="/CadastroPet" className="CadastroPet">Cadastro do Pet</Link>
<Link to="/AgenVis" className="AgenVis">Agendamento do Pet</Link>

{!isRegistered && <Link to="/usuario" className="Cadastro">Cadastro do Usuario</Link>}
</header>
 );
}
export default Header;