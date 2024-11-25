import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrosseldois.css";
import imagem from './mobileandamentoaovivo.png';
import imagem2 from './mobileagendamentos.png';
import imagem3 from './mobileconsultas.png';
import imagem4 from './mobilecontato.png';

const Carrosseldois = () => {
  const settings = {
    dots: true,
    //descrição:se true,exibe os pontos de navegação abaixo do carrossel
    speed: 500,
    infinite: true,
    //descrição:se true,faz com que o carrossel rode de maneia infinita
    speed: 500,
    //descrição:Define a velocidade da transição entre os slides em milissegundos
    slidesToShow: 1,
    //descrição:Quantidades de slides que serao passados por vez
    slidesToScroll: 1,
    //Descrição:Define o intervalo de tempo(milissegundos) entre a troca automatica dos slides
    autoplaySpeed: 2000,
    //Descrição:Ativa ou desativa a rotação automatica dos slides
    autoplay: true,
    //Descrição:Se "true",pausa o autoplay quando o mouse está sobre o carrossel
    pauseOnHover: true
  };

  return (

    <div className='divprofum' style={{ width: '100% ' }}>
      <Slider {...settings}>


      
        
        <div>
          <div className='imagemum' > <img src={imagem2} />  </div>
          <div className='texto'>
            <h1>Agendamentos</h1>
            <h2 > "Um aplicativo que permite aos donos de animais de estimação marcar e gerenciar serviços como banho, tosa, consultas veterinárias, hospedagem e creche de forma prática e eficiente. Com funcionalidades como calendário integrado, notificações de lembrete, perfis detalhados dos pets e pagamento online, o app simplifica o processo de cuidar dos animais. Os usuários podem buscar e avaliar profissionais próximos e manter todas as informações de saúde e preferências de seus pets organizadas em um único lugar, garantindo comodidade e melhor organização na rotina de cuidados."</h2>
          </div>
        </div>

        <div>
          <div className='imagemum' > <img src={imagem3} />  </div>
          <div className='texto'>
            <h1>Consultas</h1>
            <h2 > "Um aplicativo de consultas para pets facilita a vida dos donos de animais de estimação ao permitir o agendamento e gerenciamento de consultas veterinárias de forma prática e eficiente. Com funcionalidades como calendário integrado, notificações de lembrete, perfis detalhados dos pets e pagamento online, o app simplifica o processo de cuidado com a saúde dos animais. Os usuários podem buscar e avaliar veterinários próximos, acessar históricos médicos e vacinais, e receber lembretes de consultas futuras, garantindo um acompanhamento de saúde mais organizado e acessível para seus pets."</h2>
          </div>
        </div>

        <div>
          <div className='imagemum' > <img src={imagem4} />  </div>
          <div className='texto'>
            <h1>Contatos</h1>
            <h2 > "Um aplicativo de pets que integra contatos como WhatsApp e Instagram facilita a comunicação e interação dos donos de animais de estimação com veterinários, pet shops, groomers e outros serviços essenciais. Com funcionalidades que permitem acessar rapidamente perfis de redes sociais e iniciar conversas via WhatsApp, o app torna mais fácil agendar consultas, fazer perguntas e compartilhar informações sobre os pets. Além disso, os usuários podem seguir as redes sociais dos prestadores de serviços para acompanhar novidades, promoções e dicas, melhorando a conexão e a eficiência no cuidado com seus animais."</h2>
          </div>
        </div>



      </Slider>
    </div>
  );
}

export default Carrosseldois;