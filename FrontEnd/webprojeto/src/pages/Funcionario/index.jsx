import { useState, useEffect } from "react";
import './Funcionario.css';
import Rodape from '../Rodape';
import api from "../../services/api";
import ReactInputMask from "react-input-mask";
const Funcionario = () => {
 const [vnome, setNome] = useState('');
 const [vnasc, setNasc] = useState('');
 const [vgenero, setGenero] = useState('');
 const [vende, setEnde] = useState('');
 const [vnum, setNum] = useState('');
 const [vemail, setEmail] = useState('');
 const [errors, setErrors] = useState({});
 const [cadastroConfirmado, setCadastroConfirmado] = useState(false);
 const [funcionarios, setFuncionarios] = useState([]);
 const handleSubmit = async () => {
   const newErrors = {};
   if (!vnome) newErrors.nome = "Nome é obrigatório.";
   if (!vnasc) newErrors.nasc = "Data de Nascimento é obrigatória.";
   if (!vgenero) newErrors.genero = "Gênero é obrigatório.";
   if (!vende) newErrors.endereco = "Endereço é obrigatório.";
   if (!vnum) newErrors.numero = "Número é obrigatório.";
   if (!vemail) newErrors.email = "Email é obrigatório.";
   if (vemail && !vemail.includes('@')) {
     newErrors.email = "Informe um e-mail válido.";
   }
   if (vnome && !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(vnome)) {
     newErrors.nome = "O nome deve conter apenas letras.";
   }
   setErrors(newErrors);
   if (Object.keys(newErrors).length > 0) return;
   try {
     const response = await api.post('funcionario', {
       funName: vnome,
       funNasc: vnasc,
       funGenero: vgenero,
       funEnde: vende,
       funNum: vnum,
       funEmail: vemail
     });
     console.log(response.data);
     setCadastroConfirmado(true); // Ativa a mensagem de sucesso
     const novoFuncionario = {
       nome: vnome,
       nasc: vnasc,
       genero: vgenero,
       ende: vende,
       num: vnum,
       email: vemail
     };
     setFuncionarios([...funcionarios, novoFuncionario]);
     // Limpa os campos do formulário
     setNome('');
     setNasc('');
     setGenero('');
     setEnde('');
     setNum('');
     setEmail('');
     setErrors({});
     // Oculta a mensagem de sucesso após 3 segundos
     setTimeout(() => setCadastroConfirmado(false), 3000);
   } catch (error) {
     console.log(error);
   }
 };
 return (
<div>
<div className="divum">
<h1 className="h1">Faça Seu Cadastro</h1>
<h1>Funcionários Cadastrados</h1>
</div>
<div className="app-container">
       {cadastroConfirmado && <p className="confirmation-message">Cadastro realizado com sucesso!</p>}
<div className="form-group">
<label className="label">Nome</label> <br />
<input type="text" value={vnome} placeholder="Informe o seu Nome Completo" onChange={(e) => setNome(e.target.value)} />
         {errors.nome && <p className="error">{errors.nome}</p>}
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
<select className="generofuncionario" value={vgenero} onChange={(e) => setGenero(e.target.value)}>
<option value="">Selecione</option>
<option value="Masculino">Masculino</option>
<option value="Feminino">Feminino</option>
<option value="Não identificado">Não identificado</option>
</select>
         {errors.genero && <p className="error">{errors.genero}</p>}
</div>
<div className="form-group">
<label className="label">Endereço</label> <br />
<input type="text" value={vende} placeholder="Informe o Endereço" onChange={(e) => setEnde(e.target.value)} />
         {errors.endereco && <p className="error">{errors.endereco}</p>}
</div>
<div className="form-group">
<label className="label">Número</label> <br />
<ReactInputMask
           mask="(99) 99999-9999"
           value={vnum}
           placeholder="(00) 00000-0000"
           onChange={(e) => setNum(e.target.value)}
         />
         {errors.numero && <p className="error">{errors.numero}</p>}
</div>
<div className="form-group">
<label className="label">Email</label> <br />
<input type="text" value={vemail} placeholder="Informe o Email" onChange={(e) => setEmail(e.target.value)} />
         {errors.email && <p className="error">{errors.email}</p>}
</div>
<div className="button">
<button onClick={handleSubmit}>Criar Conta</button>
</div>
</div>
<div className="FuncionariosCadastrados">
<table>
<thead>
<tr>
<th>Nome</th>
<th>Data de Nascimento</th>
<th>Gênero</th>
<th>Endereço</th>
<th>Número</th>
<th>Email</th>
</tr>
</thead>
<tbody>
           {funcionarios.map((funcionario, index) => (
<tr key={index}>
<td>{funcionario.nome}</td>
<td>{funcionario.nasc}</td>
<td>{funcionario.genero}</td>
<td>{funcionario.ende}</td>
<td>{funcionario.num}</td>
<td>{funcionario.email}</td>
</tr>
           ))}
</tbody>
</table>
</div>
<br/><Rodape />
</div>
 );
};
export default Funcionario;


/*import { useState } from "react";
import './Funcionario.css';
import Rodape from '../Rodape';
import api from "../../services/api";
import ReactInputMask from "react-input-mask";
const Funcionario = () => {
  
  const [vnome, setNome] = useState('');
  const [vnasc, setNasc] = useState('');
  const [vgenero, setGenero] = useState('');
  const [vende, setEnde] = useState('');
  const [vnum, setNum] = useState('');
  const [vemail, setemail] = useState('');
  const [errors, setErrors] = useState({});
  const [cadastroConfirmado, setCadastroConfirmado] = useState(false);
  const [funcionarios, setFuncionarios] = useState([]); // Novo estado para armazenar funcionário
  const handleSubmit = async () => {
    const newErrors = {};
  
    if (!vnome) newErrors.nome = "Nome é obrigatório.";
    if (!vnasc) newErrors.nasc = "Data de Nascimento é obrigatória.";
    if (!vgenero) newErrors.genero = "Gênero é obrigatório.";
    if (!vende) newErrors.endereco = "Endereço é obrigatório.";
    if (!vnum) newErrors.numero = "Numero é obrigatório.";
    if (!vemail) newErrors.email = "Email é obrigatório.";  
    if (vemail && !vemail.includes('@')) {
      newErrors.email = "Informe um e-mail válido.";
    }
    if (vnome && !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(vnome)) {
      newErrors.nome = "O nome deve conter apenas letras.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    try {
      const response = await api.post('funcionario', {
        funcionarioName: vnome,
        funcionarioNasc: vnasc,
        FuncionarioGenero: vgenero,
        FuncionarioEnde: vende,
        funcionarioNum: vnum,
        funcionarioEmail: vemail
      });
      console.log(response.data);
      setCadastroConfirmado(true);
      // Adiciona o novo funcionário à lista, sem a senha
      const novoFuncionario = {
        nome: vnome,
        nasc: vnasc,
        genero: vgenero,
        ende: vende,
        num: vnum,
        email: vemail
        
        
      };
      setFuncionarios([...funcionarios, novoFuncionario]);
      // Limpa os campos do formulário
      setNome('');
      setNasc('');
      setGenero('');
      setEnde('');
      setNum('');
      setemail('');
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
<h1>Funcionários Cadastrados</h1>
</div>

<div className="app-container">
        {cadastroConfirmado && <p className="confirmation-message">Cadastro confirmado!</p>}
<div className="form-group">
<label className="label">Nome</label> <br />
<input type="text" value={vnome} placeholder="Informe o seu Nome Completo" onChange={(e) => setNome(e.target.value)} />
          {errors.nome && <p className="error">{errors.nome}</p>}
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
<option value="Masculino">Masculino</option>
<option value="Feminino">Feminino</option>
<option value="Não identificado">Não identificado</option>
</select>
          {errors.genero && <p className="error">{errors.genero}</p>}
</div>

<div className="form-group">
<label className="label">Endereço</label> <br />
<input type="text" value={vemail} placeholder="Informe o Endereço" onChange={(e) => setEnde(e.target.value)} />
          {errors.ende && <p className="error">{errors.ende}</p>}
</div>

<div className="form-group">
<label className="label">Número</label> <br />
<input type="text" value={vemail} placeholder="Informe o número" onChange={(e) => setNum(e.target.value)} />
      <ReactInputMask
      mask="(99) 99999-9999"
      placeholder="(00) 00000-0000"
      ></ReactInputMask>
          {errors.num && <p className="error">{errors.num}</p>}
</div>

<div className="form-group">
<label className="label">Email</label> <br />
<input type="text" value={vemail} placeholder="Informe o Email" onChange={(e) => setemail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}
</div>

<div className="button">
<button onClick={handleSubmit}>Criar Conta</button>
</div>
</div>
<div className="FuncionariosCadastrados">

<table>
<thead>
<tr>
<th>Nome</th>
<th>Data de Nascimento</th>
<th>Gênero</th>
<th>Endereço</th>
<th>Número</th>
<th>Email</th>
</tr>
</thead>
<tbody>
            {funcionarios.map((funcionario, index) => (
<tr key={index}>
<td>{funcionario.nome}</td>
<td>{funcionario.nasc}</td>
<td>{funcionario.genero}</td>
<td>{funcionario.ende}</td>
<td>{funcionario.num}</td>
<td>{funcionario.email}</td>



</tr>
            ))}
</tbody>
</table>
</div>
<br/><Rodape />
</div>
  );
};
export default Funcionario; */