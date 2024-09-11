
import  {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import React from 'react';
import './parcerias.css';
import imagem2 from './appleinstale copy.png';
import imagem3 from './googleplayinstale copy.png';
import Rodape from '../Rodape';
import imagem4 from './imagensParcerias/parceiro10.jpeg';
import imagem5 from './imagensParcerias/parceiro9.jpeg';
import imagem6 from './imagensParcerias/parceiro8.jpeg';
import imagem7 from './imagensParcerias/parceiro7.jpeg';
import imagem8 from './imagensParcerias/parceiro6.jpeg';
import imagem9 from './imagensParcerias/parceiro5.jpeg';
import imagem10 from './imagensParcerias/parceiro4.jpeg';
import imagem11 from './imagensParcerias/parceiro3.jpeg';
import imagem12 from './imagensParcerias/parceiro2.jpeg';
import imagem13 from './imagensParcerias/parceiro1.jpeg';




function parcerias () {


    return(
      <div>
      <div className="divumparcerias">
       <h1>PARCERIAS</h1>
       <h3>Eles cooperam conosco pelo mundo Pet</h3>
     </div>
     <div>
     <center>
                    <img src={imagem4} className="parceiros" />
                    <img src={imagem5} className="parceiros" />
                    <img src={imagem6} className="parceiros" />
                    <img src={imagem7} className="parceiros" />
                    <img src={imagem8} className="parceiros" />
                    <img src={imagem9} className="parceiros" />
                    <img src={imagem10} className="parceiros" />
                    <img src={imagem11} className="parceiros" />
                    <img src={imagem12} className="parceiros" />
                    <img src={imagem13} className="parceiros" />

                </center>
     </div>

     
   
  
           <div><Rodape /></div>
          
          
   </div>
    

    )

}
export default parcerias;