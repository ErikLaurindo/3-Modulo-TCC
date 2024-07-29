
import { Link } from 'react-router-dom'
import './header.css';
import imagem from './logoume.jpg'

function Header(){

    return(
            <header>
                <  Link to="/" className="logoum"><img src = {imagem} className="logoimagem" /> </Link>
               
                <Link to={"/"} className="Home">Home</Link>
                <Link to={"/usuario"} className="Cadastro">Faça seu Cadastro</Link>
                <Link to={"/duvidas"} className="Dúvidas">Dúvidas</Link>
                <Link to={"/parcerias"} className="Parcerias">Parcerias</Link>
          
            </header>

    )

}
export default Header;