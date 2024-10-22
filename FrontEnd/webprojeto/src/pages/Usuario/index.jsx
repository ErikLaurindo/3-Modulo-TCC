import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import './usuario.css';
import Rodape from '../Rodape';
import api from "../../services/api";
import ReactInputMask from "react-input-mask";

const Usuario = () => {
  const [vnome, setNome] = useState('');
  const [vsenha, setSenha] = useState('');
  const [vemail, setEmail] = useState('');
  const [vnasc, setNasc] = useState('');
  const [vgenero, setGenero] = useState('');
  const [errors, setErrors] = useState({});
  const [cadastroConfirmado, setCadastroConfirmado] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const newErrors = {};
    if (!vnome) newErrors.nome = "Nome é obrigatório.";
    if (!vemail) newErrors.email = "Email é obrigatório.";
    if (!vnasc) newErrors.nasc = "Data de Nascimento é obrigatória.";
    if (!vgenero) newErrors.genero = "Gênero é obrigatório.";
    if (!vsenha) newErrors.senha = "Senha é obrigatória.";
    if (vemail && !vemail.includes('@')) {
      newErrors.email = "Informe um e-mail válido.";
    }
    if (vnome && !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(vnome)) {
      newErrors.nome = "O nome deve conter apenas letras.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await api.post('users', {
        userName: vnome,
        userSenha: vsenha,
        userEmail: vemail,
        userNasc: vnasc,
        userGenero: vgenero
      });
      console.log(response.data);
      setCadastroConfirmado(true);

      // Adiciona o novo usuário à lista, usando as chaves corretas
      const novoUsuario = {
        userName: vnome,
        userEmail: vemail,
        nasc: vnasc,
        genero: vgenero
      };

      // Carrega os usuários existentes do localStorage
      const storedUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      // Atualiza a lista de usuários
      storedUsuarios.push(novoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(storedUsuarios));

      // Limpa os campos do formulário
      setNome('');
      setSenha('');
      setEmail('');
      setNasc('');
      setGenero('');
      setErrors({});
      setTimeout(() => {
        setCadastroConfirmado(false);
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="tudo">
      <div className="divum">
        <h1 className="h1">FAÇA SEU CADASTRO</h1>
      </div>

      {cadastroConfirmado && <p className="confirmation-message">Cadastro confirmado!</p>}

      <div className="DivCadastro">
        <label className="labelCadastro">Nome</label> <br />
        <input type="text" value={vnome} placeholder="Informe o seu Nome Completo" onChange={(e) => setNome(e.target.value)} />
        {errors.nome && <p className="error">{errors.nome}</p>}
      </div>

      <div className="DivCadastro">
        <label className="labelCadastro">Email</label> <br />
        <input type="text" value={vemail} placeholder="Informe o Email" onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="DivCadastro">
        <label className="labelCadastro">Data de Nascimento</label> <br />
        <ReactInputMask
          mask="99/99/9999"
          value={vnasc}
          placeholder="DD/MM/AAAA"
          onChange={(e) => setNasc(e.target.value)}
        />
        {errors.nasc && <p className="error">{errors.nasc}</p>}
      </div>

      <div className="DivCadastro">
        <label className="labelCadastro">Gênero</label> <br />
        <select className="Cadastrogenero" value={vgenero} onChange={(e) => setGenero(e.target.value)}>
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Não identificado">Não identificado</option>
        </select>
        {errors.genero && <p className="error">{errors.genero}</p>}
      </div>

      <div className="DivCadastro">
        <label className="labelCadastro">Senha</label> <br />
        <input name="password" id="password" type="password" maxLength={8} value={vsenha} onChange={(e) => setSenha(e.target.value)} />
        {errors.senha && <p className="error">{errors.senha}</p>}
      </div>

      <div className="buttonCriarConta">
        <button onClick={handleSubmit}>Criar Conta</button>
      </div>

      <br /><Rodape />
    </div>  
  );
};

export default Usuario;

                                  

 
 

 /*// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import imagem2 from './appleinstale copy.png';
import imagem3 from './googleplayinstale copy.png';
import Rodape from '../Rodape';
import imagem from './fundoum,.png';
import { useState } from "react";
import api from "../../services/api";


const Usuario = () => {
   
  const[User_name, setNome] = useState('')
  const[User_senha, setSenha] = useState('')
  const[User_Email, setEmail] = useState('')  
  
const handleSubmit = async () => {
  try{
    
    const response = await api.post('/Users',{nome: User_name, senha: User_senha, Email: User_Email })
   console.log(response.data)
  }catch (error){
    console.log(error)
  }
}

  return (
    <div >
       <div className="divum">
        <h1>Faça Seu Cadastro</h1>
      </div>
    <div className="app-container">
     
      <div className="form-group">
        <label className="label">Nome</label> < br/>
        <input type="text" placeholder="Informe o Nome do Produto"  onCharge={(e) => setNome(e.target.value)}/> 
      </div>

      <div className="form-group">
        <label className="label">Senha</label> < br/>
        <input type="text" placeholder="Informe a descricao do produto"   onCharge={(e) => setSenha(e.target.value)} /> 
      </div>
       
      <div className="form-group">
        <label className="label">Email</label> < br/>
        <input type="text" placeholder="Informe o preco do produto"   onCharge={(e) => setEmail(e.target.value)} /> 
      </div>



      <div className="form-group">
            
            <button onClick={handleSubmit}>Criar Conta</button>
      </div>
     
         
    </div>
    <div>  <img src={imagem} className="imagem" /></div>
    
            <div><Rodape /></div>
           
           
    </div>
  )
}



export default Usuario;*/