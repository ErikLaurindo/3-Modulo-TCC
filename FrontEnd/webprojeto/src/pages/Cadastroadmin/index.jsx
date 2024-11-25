import api from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroAdmin.css';

function CadastroAdmin() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    // Validações simples no frontend
    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem!");
      return;
    }

    try {
      const response = await api.post('http://localhost:8080/cadastro-admin', {
        nome: nome,
        email: email,
        senha: senha
      });

      if (response.status === 201) {
        navigate('/login'); // Redireciona para a tela de login após o cadastro
      }
    } catch (err) {
      setError('Erro ao cadastrar administrador. Tente novamente.');
      console.error(err);
    }
  };

  return (
    <div className="TelaCadastro">
      <div className="divumCadastro">
        <h1 className="h1">CADASTRO DE ADMINISTRADOR</h1>
      </div>

      <form onSubmit={handleCadastro}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>

        <label>
          Confirmar Senha:
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </label>

        <button type="submit">Cadastrar</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default CadastroAdmin;
