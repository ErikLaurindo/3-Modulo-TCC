import { useState, useEffect } from "react";
import axios from "axios";
import './listaPets.css';
import Rodape from '../Rodape';
import api from "../../services/api";  // Sua API configurada

const Listagem = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [pets, setPets] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});
  const [editingPet, setEditingPet] = useState(null);
  const [editedPetData, setEditedPetData] = useState({});
  const [editingAgendamento, setEditingAgendamento] = useState(null);
  const [editedAgendamentoData, setEditedAgendamentoData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Carregar os dados ao montar o componente (GET da API)
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Requisições à API
        const usuariosResponse = await api.get('/users');
        const petsResponse = await api.get('/pets');
        const agendamentosResponse = await api.get('/agendamentos');
        
        // Atualizando o estado com os dados obtidos da API
        setUsuarios(usuariosResponse.data);
        setPets(petsResponse.data);
        setAgendamentos(agendamentosResponse.data);

      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setErrorMessage("Erro ao carregar os dados da API");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []); // A requisição é feita apenas uma vez quando o componente é montado

  // Função para edição de usuário
  const startEditingUser = (usuario) => {
    setEditingUser(usuario);
    setEditedUserData(usuario);
  };

  const handleUserEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const saveEditedUser = async () => {
    if (!validateEmail(editedUserData.userEmail)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    setLoading(true);

    try {
      const userId = editedUserData.id;  // ID do usuário para edição

      const response = await api.put(`/users/${userId}`, {
        userName: editedUserData.userName,
        userEmail: editedUserData.userEmail
      });

      if (response.status === 200) {
        setUsuarios(prevUsuarios =>
          prevUsuarios.map(usuario =>
            usuario.id === editedUserData.id ? { ...usuario, ...editedUserData } : usuario
          )
        );
        setEditingUser(null);
        alert('Usuário atualizado com sucesso!');
      } else {
        alert('Erro ao atualizar usuário: ' + response.data);
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      alert("Houve um erro ao atualizar o usuário. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Funções para edição de pet
  const startEditingPet = (pet) => {
    setEditingPet(pet);
    setEditedPetData(pet);
  };

  const handlePetEditChange = (e) => {
    const { name, value } = e.target;
    setEditedPetData({ ...editedPetData, [name]: value });
  };

  const saveEditedPet = async () => {
    setLoading(true);

    try {
      const response = await api.put(`/pets/${editedPetData.id}`, editedPetData);
      
      if (response.status === 200) {
        const updatedPets = pets.map(pet => pet.id === editedPetData.id ? editedPetData : pet);
        setPets(updatedPets);
        setEditingPet(null);
        alert('Pet atualizado com sucesso!');
      } else {
        alert('Erro ao atualizar pet: ' + response.data);
      }
    } catch (error) {
      console.error("Erro ao atualizar pet:", error);
      alert("Houve um erro ao atualizar o pet. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Funções para edição de agendamento
  const startEditingAgendamento = (agendamento) => {
    setEditingAgendamento(agendamento);
    setEditedAgendamentoData(agendamento);
  };

  const handleAgendamentoChange = (e) => {
    const { name, value } = e.target;
    setEditedAgendamentoData({ ...editedAgendamentoData, [name]: value });
  };

  const saveEditedAgendamento = async () => {
    setLoading(true);

    try {
      const response = await api.put(`/agendamentos/${editedAgendamentoData.id}`, editedAgendamentoData);

      if (response.status === 200) {
        const updatedAgendamentos = agendamentos.map(agendamento =>
          agendamento.id === editedAgendamentoData.id ? editedAgendamentoData : agendamento
        );
        setAgendamentos(updatedAgendamentos);
        setEditingAgendamento(null);
        alert('Agendamento atualizado com sucesso!');
      } else {
        alert('Erro ao atualizar agendamento: ' + response.data);
      }
    } catch (error) {
      console.error("Erro ao atualizar agendamento:", error);
      alert("Houve um erro ao atualizar o agendamento. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Funções para deletar
  const deleteUser = async (id) => {
    try {
      const response = await api.delete(`/users/${id}`);
      if (response.status === 200) {
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        alert('Usuário deletado com sucesso!');
      } else {
        alert('Erro ao deletar usuário');
      }
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      alert("Erro ao deletar usuário.");
    }
  };

  const deletePet = async (id) => {
    try {
      const response = await api.delete(`/pets/${id}`);
      if (response.status === 200) {
        setPets(pets.filter(pet => pet.id !== id));
        alert('Pet deletado com sucesso!');
      } else {
        alert('Erro ao deletar pet');
      }
    } catch (error) {
      console.error("Erro ao deletar pet:", error);
      alert("Erro ao deletar pet.");
    }
  };

  const deleteAgendamento = async (id) => {
    try {
      const response = await api.delete(`/agendamentos/${id}`);
      if (response.status === 200) {
        setAgendamentos(agendamentos.filter(agendamento => agendamento.id !== id));
        alert('Agendamento deletado com sucesso!');
      } else {
        alert('Erro ao deletar agendamento');
      }
    } catch (error) {
      console.error("Erro ao deletar agendamento:", error);
      alert("Erro ao deletar agendamento.");
    }
  };

  return (
    <div className="listagem-container">
      <h1>Listagem de Cadastros</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {loading ? (
        <div>Carregando...</div>
      ) : (
        <>
          {/* Usuários */}
          <div className="listagem">
            <h2>Usuários</h2>
            <ul>
              {usuarios.map((usuario) => (
                <li key={usuario.id}>
                  <span>{usuario.userName} ({usuario.userEmail})</span>
                  <button onClick={() => startEditingUser(usuario)}>Editar</button>
                  <button onClick={() => deleteUser(usuario.id)}>Deletar</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Pets */}
          <div className="listagem">
            <h2>Pets</h2>
            <ul>
              {pets.map((pet) => (
                <li key={pet.id}>
                  <span>{pet.infRaca} ({pet.infEspecie})</span>
                  <button onClick={() => startEditingPet(pet)}>Editar</button>
                  <button onClick={() => deletePet(pet.id)}>Deletar</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Agendamentos */}
          <div className="listagem">
            <h2>Agendamentos</h2>
            <ul>
              {agendamentos.map((agendamento) => (
                <li key={agendamento.id}>
                  <span>{agendamento.agenTipo} ({agendamento.agenDataAgen})</span>
                  <button onClick={() => startEditingAgendamento(agendamento)}>Editar</button>
                  <button onClick={() => deleteAgendamento(agendamento.id)}>Deletar</button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <Rodape />
    </div>
  );
};

export default Listagem;
