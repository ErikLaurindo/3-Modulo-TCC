
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Rodape from '../Rodape';
import Carrossel from '../Carrossel';
import Carrosseldois from '../Carrosseldois';

import imagem from './imagens/arara.png';
import imagem2 from './imagens/appleinstale.png';
import imagem3 from './imagens/googleplayinstale.png';
import imagem5 from './imagens/testetres.png';
import imagem6 from './imagens/profdois.png';
import imagem7 from './imagens/avaliacao.png';
import imagem8 from './imagens/avaliacao1.jpeg';
import imagem9 from './imagens/avaliacao3.jpeg';
import imagem10 from './imagens/avaliacao2.jpeg';
import imagem11 from './imagens/cadastrarse.jpg';
import imagem12 from './imagens/mobileagendamentos.png';
import imagem13 from './imagens/mobileconsultas.png';
import imagem14 from './imagens/mobileandamentoaovivo.png';
import imagem15 from './imagens/dogecat.png';
import imagem16 from './imagens/parceiro10.jpeg';
import imagem17 from './imagens/parceiro1.jpeg';
import imagem18 from './imagens/parceiro2.jpeg';
import imagem19 from './imagens/parceiro3.jpeg';
import imagem20 from './imagens/parceiro4.jpeg';
import imagem21 from './imagens/parceiro5.jpeg';
import imagem22 from './imagens/parceiro6.jpeg';
import imagem23 from './imagens/parceiro7.jpeg';
import imagem24 from './imagens/parceiro8.jpeg';
import imagem25 from './imagens/parceiro9.jpeg';
import imagem26 from './imagens/coelho.png';
import imagem27 from './imagens/rottweiler.png';



function Home() {

    return (

        <div className="divpaii">
            <div className="divparteum">
                <center> <h1 className="textoum">O app feito para você cuidar ainda melhor dos seus pets!</h1>
                <Link to='/Usuario'> <button className="Cadastrar" > Cadastrar </button> </Link>

                </center>
            </div>
            <div className="divpartedois">
                <center> <img src={imagem} className="" /></center>
            </div>
            <div className='divpartetres'>
                <center> <img src={imagem27} className="" /></center>
            </div>
            <div className='divpartequatro'>
                <center> <h1 className="textoum">Você sabia que apenas 30% dos tutores lembram ou registram os dados de saúde de seus pets?Você sabia que apenas 30% dos tutores lembram ou registram os dados de saúde de seus pets?Você sabia que apenas 30% dos tutores lembram ou registram os dados de saúde de seus pets?</h1>

                </center>
            </div>
            <div className='divpartecinco'>
                <center> <img src={imagem26} className="fundoum" /></center>
            </div>
            <div className='divparteseis'>
                <center> <h1 className='textodivseis'>Tudo Que Seu Pet Precisa Na Palma Da Mão</h1>
                    <h3 >O modo de cuidar do seu animal de estimação também se modernizou. Entre nessa e não fique para trás! Petzillas é o aplicativo mais completo que milhares de pessoas e profissionais estão usando. Ele te ensina a cuidar, lembra de cada dose e gera um histórico de saúde para seu veterinário. Se for viajar, compartilhe o cuidado com outra pessoa e fique de olho. E tem muito mais recursos…</h3>
                    <  Link to="/usuario" className="instale"><img src={imagem3} className="instale" /> </Link>
                    <  Link to="/usuario" className="instale"><img src={imagem2} className="instale" /> </Link>
                </center>
            </div>
           


            <div className='divpartesete'> < Carrosseldois/ > </div>
            <div className='textodivnove'><center><h1>Quem está usando Mania de Pets</h1></center>  </div>
            <div className='divpartenove'> < Carrossel/>  </div>
           
            <div className='divpartedez'>
                <img src={imagem7} className="avaliacao" />
                <img src={imagem8} className="avaliaca" />
                <img src={imagem9} className="avaliaca" />
                <img src={imagem10} className="avaliaca" />


            </div>
            <div className='divparteonze'>
                <center> <h1>Parceiros</h1>
                    <img src={imagem16} className="parceiros" />
                    <img src={imagem17} className="parceiros" />
                    <img src={imagem18} className="parceiros" />
                    <img src={imagem19} className="parceiros" />
                    <img src={imagem20} className="parceiros" />
                    <img src={imagem21} className="parceiros" />
                    <img src={imagem22} className="parceiros" />
                    <img src={imagem23} className="parceiros" />
                    <img src={imagem24} className="parceiros" />
                    <img src={imagem25} className="parceiros" />

                </center>

            </div>

        
            <Rodape />

        </div>



    )

}

export default Home;

/*  </div>
            <div><center><h1>Quem está usando Mania de Pets</h1></center></div>
            <div className='divparteoito'>
                <center> <img src={imagem5} className="imagemprof" />
                   <h1>Antonio Luis Barboza</h1>
                    <h2 className='textoquemestausandooapp'> "Imagine um app de pets onde você pode agendar uma consulta e assistir ao vivo seu cachorro tentando convencer o veterinário de que o termômetro na verdade é um palito de sorvete gigante. Finalmente, uma maneira de ficar nervoso e rir ao mesmo tempo!"

</h2>
                </center>
            </div>
            <div className='divpartenove'>
                <center> <img src={imagem6} className="imagemprof" />
                <h1>Decio Malta</h1>
                    <h2 className='textoquemestausandooapp'> "Com este app de pets, você pode acompanhar ao vivo os exames e consultas do seu animalzinho. Agora, você pode ver em tempo real o momento exato em que seu gato percebe que a balança do veterinário não é uma cama nova e confortável. Drama garantido!" </h2>
                </center>
            </div>
           
            <div className='divpartedez'>
                <img src={imagem7} className="avaliacao" />
                <img src={imagem8} className="avaliaca" />
                <img src={imagem9} className="avaliaca" />
                <img src={imagem10} className="avaliaca" />


            </div> 
             <div className='divpartedez'>
                <img src={imagem7} className="avaliacao" />
                <img src={imagem8} className="avaliaca" />
                <img src={imagem9} className="avaliaca" />
                <img src={imagem10} className="avaliaca" />


            </div>
               <div className='divpartesete'>
                <img src={imagem12} className="mobile"></img>
                <img src={imagem13} className=""></img>
                <img src={imagem14} className=""></img>
                <img src={imagem15} className=""></img>

            </div>*/