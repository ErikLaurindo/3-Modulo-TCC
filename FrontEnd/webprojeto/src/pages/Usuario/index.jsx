import { useState } from "react";
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
  const [usuarios, setUsuarios] = useState([]); // Novo estado para armazenar usuários
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
      // Adiciona o novo usuário à lista, sem a senha
      const novoUsuario = {
        nome: vnome,
        email: vemail,
        nasc: vnasc,
        genero: vgenero
      };
      setUsuarios([...usuarios, novoUsuario]);
      // Limpa os campos do formulário
      setNome('');
      setSenha('');
      setEmail('');
      setNasc('');
      setGenero('');
      setErrors({});
      setCadastroConfirmado(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
<div>
<div className="divum">
<h1 className="h1">Faça Seu Cadastro</h1>
<h1>Usuários Cadastrados</h1>
</div>

<div className="app-container">
        {cadastroConfirmado && <p className="confirmation-message">Cadastro confirmado!</p>}
<div className="form-group">
<label className="label">Nome</label> <br />
<input type="text" value={vnome} placeholder="Informe o seu Nome Completo" onChange={(e) => setNome(e.target.value)} />
          {errors.nome && <p className="error">{errors.nome}</p>}
</div>
<div className="form-group">
<label className="label">Email</label> <br />
<input type="text" value={vemail} placeholder="Informe o Email" onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}
</div>
<div className="form-group">
<label className="label">Data de Nascimento</label> <br />
<ReactInputMask
            mask="99/99/9999"
            value={vnasc}
            placeholder="DD/MM/AAAA"
            onChange={(e) => setNasc(e.target.value)}
          />
          {errors.nasc && <p className="error">{errors.nasc}</p>}
</div>
<div className="form-group">
<label className="label">Gênero</label> <br />
<select className="genero" value={vgenero} onChange={(e) => setGenero(e.target.value)}>
<option value="">Selecione</option>
<option value="M">Masculino</option>
<option value="F">Feminino</option>
<option value="m">Não identificado</option>
</select>
          {errors.genero && <p className="error">{errors.genero}</p>}
</div>
<div className="form-group">
<label className="label">Senha</label> <br />
<input name="password" id="password" type="password" maxLength={8} value={vsenha} onChange={(e) => setSenha(e.target.value)} />
          {errors.senha && <p className="error">{errors.senha}</p>}
</div>
<div className="button">
<button onClick={handleSubmit}>Criar Conta</button>
</div>
</div>
<div className="UsuariosCadastrados">

<table>
<thead>
<tr>
<th>Nome</th>
<th>Email</th>
<th>Data de Nascimento</th>
<th>Gênero</th>
</tr>
</thead>
<tbody>
            {usuarios.map((usuario, index) => (
<tr key={index}>
<td>{usuario.nome}</td>
<td>{usuario.email}</td>
<td>{usuario.nasc}</td>
<td>{usuario.genero}</td>
</tr>
            ))}
</tbody>
</table>
</div>
<br/><Rodape />
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