import api from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o hook useNavigate
import './Login.css';
function Login({ onLogin }) {
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');
 const [error, setError] = useState('');
 const navigate = useNavigate(); // Hook para navegar programaticamente
 const handleLogin = async (e) => {
   e.preventDefault();
   try {
     const response = await api.post('http://localhost:8080/login', {
       userEmail: email,
       userSenha: senha
     });
     if (response.status === 200) {
       onLogin(); // Atualiza o estado de isLoggedIn no componente pai
       navigate('/'); // Redireciona para a página Home
       sessionStorage.setItem("userId", response.data.id);
     }
   } catch (err) {
     setError('Email ou senha incorretos.');
     console.error(err);
   }
 };
 return (
<div className='TelaLogin'>
    <div className='divumlogin'>
        <h1 className="h1">FAÇA SEU LOGIN</h1>
        <h1> 
          
        </h1>
    </div>

<form onSubmit={handleLogin}>
<label>
         Email:
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</label>
<label>
         Senha:
<input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
</label>
<button type="submit">Login</button>
</form>
     {error && <p>{error}</p>}
</div>
 );
}
export default Login;