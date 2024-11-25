import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carrossel.css";
import imagem from './profdois.png';
import imagem3 from './profum.png';

const Carrossel = () => {
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
    autoplay:true,
    //Descrição:Se "true",pausa o autoplay quando o mouse está sobre o carrossel
    pauseOnHover:true
  };

  return (
    
    <div className='divprofu' style  ={{ width: '100% '}}>
      <Slider {...settings}>
        

        
      <div  >
        <div className='profu' > <img src={imagem}  />    
         <h1>Décio Malta</h1>
         <h2 > "Com este app de pets, você pode acompanhar  os exames e consultas do seu animalzinho. "</h2></div>
        </div>


        <div  >
        <div className='profu' > <img src={imagem3}  />    
         <h1>Antonio Luis Barboza</h1>
         <h2 > "Imagine um app de pets onde você pode agendar uma consulta , ter uma analise do seu pet completa."</h2></div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carrossel;