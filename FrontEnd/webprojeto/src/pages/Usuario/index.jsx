import { useState } from "react";
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
  const [mensagemConfirmacao, setMensagemConfirmacao] = useState(''); // Estado para a mensagem
  const navigate = useNavigate();

  // Função para calcular a idade com base na data de nascimento
  const calculateAge = (birthDate) => {
    const birth = new Date(birthDate.split('/').reverse().join('-')); // Converte para o formato YYYY-MM-DD
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth();
    if (month < birth.getMonth() || (month === birth.getMonth() && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  // Função para validar a data de nascimento (verifica se é uma data válida)
  const isValidDate = (dateString) => {
    const dateParts = dateString.split('/');
    if (dateParts.length !== 3) return false;
    
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);

    const date = new Date(year, month - 1, day); // O mês em JavaScript começa do 0
    return date.getDate() === day && date.getMonth() + 1 === month && date.getFullYear() === year;
  };

  const handleSubmit = async () => {
    const newErrors = {};

    // Verificação de campos obrigatórios
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

    // Validação de data de nascimento e idade
    if (!isValidDate(vnasc)) {
      newErrors.nasc = "Data de nascimento inválida. Por favor, insira uma data válida no formato DD/MM/AAAA.";
    } else {
      const age = calculateAge(vnasc);
      if (age < 18) {
        newErrors.idade = "Você precisa ter 18 anos ou mais para se cadastrar.";
      }
    }

    // Validação da senha (mínimo de 8 caracteres, uma letra maiúscula e um caractere especial)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(vsenha)) {
      newErrors.senha = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial.";
    }

    setErrors(newErrors);

    // Se houver erros, não envia o formulário
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

      // Adicionando o novo usuário
      const novoUsuario = {
        userName: vnome,
        userEmail: vemail,
        nasc: vnasc,
        genero: vgenero
      };

      const storedUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      storedUsuarios.push(novoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(storedUsuarios));

      // Resetando os campos após cadastro
      setNome('');
      setSenha('');
      setEmail('');
      setNasc('');
      setGenero('');
      setErrors({});

      // Exibindo a mensagem de confirmação
      setMensagemConfirmacao("Cadastro confirmado. Em até 15 minutos, enviaremos uma mensagem para o seu e-mail contendo o seu respectivo ID ou token, bem como o ID do seu pet.  Caso seja feito um cadastro de pet ou agendamento com outro ID será cancelado imediatamente. Agradecemos pelo seu cadastro e confiança em nossos serviços.");

      // O modal agora permanecerá até ser fechado manualmente
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="tudo">
      <div className="divum">
        <h1 className="h1">FAÇA SEU CADASTRO</h1>
      </div>

      {/* Modal de confirmação */}
      {cadastroConfirmado && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Cadastro Confirmado!</h2>
            <p>{mensagemConfirmacao}</p>
            <button onClick={() => setCadastroConfirmado(false)}>Fechar</button>
          </div>
        </div>
      )}

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
        {errors.idade && <p className="error">{errors.idade}</p>} {/* Exibindo erro de idade */}
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