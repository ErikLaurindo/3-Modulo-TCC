import { Link } from 'react-router-dom';
import './duvidas.css';
import imagem from './imagemduvidas.png';
import Rodape from '../Rodape';

function Duvidas() {
    return (
      <div>
        <div className='divpai'>
            <div className='conteudo'>
                <div className='imagem-container'>
                    <img className='imagem' src={imagem} alt="Dúvidas" />
                    <img className='imagem' src={imagem} alt="Dúvidas" />
                   
                </div>
                <div className='texto-container'>
                    <h1>Quantos pets eu posso cadastrar?</h1>
                    <h3>Não há limite de pets cadastrados, você pode incluir todos os seus pets.</h3>

                    <h1>Posso compartilhar os dados dos meus pets com o veterinário?</h1>
                    <h3>
                        Sim, com o ManiaDePets você pode compartilhar os dados de seu pet com o veterinário, um membro da família, um amigo, com a creche onde deixa o seu pet, enfim, da maneira que for necessária.
                    </h3>

                    <h1>Não encontrei a raça do meu pet. O que eu faço?</h1>
                    <h3>
                        Temos uma base de dados de espécies e raças. Se não encontrar a raça do seu pet, entre em contato pelo nosso e-mail: com@ManiaDePets.com.
                    </h3>

                    <h1>Gostaria de sugerir uma nova função. Posso fazer isso?</h1>
                    <h3>
                        Claro! Aqui no ManiaDePets estamos sempre buscando novas ideias de funcionalidades que possam auxiliar ainda mais no dia a dia dos cuidados de saúde e bem-estar dos pets. Conta para nós o que precisa ou qual sua ideia, nossa equipe fará de tudo para transformar essa ideia em uma nova funcionalidade. Chama a gente pelo botãozinho do WhatsApp ou nos envie uma mensagem através do e-mail: adm@ManiaDePets.com.
                    </h3>

                    <h1>Se eu precisar trocar meu telefone, perco as informações cadastradas de meus pets?</h1>
                    <h3>
                        Não, não precisa se preocupar. Todas as informações estão protegidas e ficam salvas em nosso banco de dados. Se por qualquer motivo precisar trocar seu telefone, basta acessar de qualquer outro equipamento digitando seu "login" e "senha". Automaticamente, todos os dados cadastrados de seus pets estarão disponíveis novamente.
                    </h3>
                </div>
            </div>

          
        </div>
       
         <Rodape /></div> 
    );
}

export default Duvidas;