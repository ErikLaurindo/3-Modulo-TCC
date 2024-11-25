import { useState, useEffect } from "react";
import './listaPets.css';  // Estilos para a listagem
import Rodape from '../Rodape';  // Rodapé
import api from "../../services/api";  // API configurada

const Listagem = () => {
  // Estado para armazenar os pets, usuários e agendamentos
  const [pets, setPets] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);

  // Estados de carregamento e erro
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Estados para edição de pets, usuários e agendamentos
  const [editingItem, setEditingItem] = useState(null);  // Controle do item sendo editado
  const [editedData, setEditedData] = useState({});  // Dados editados

  // Carregar dados ao montar o componente
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const petsResponse = await api.get('/Info_Pet');  // Rota para pets
        const usuariosResponse = await api.get('/users');  // Rota para usuários
        const agendamentosResponse = await api.get('/Agen_Vis');  // Rota para agendamentos
        setPets(petsResponse.data);
        setUsuarios(usuariosResponse.data);
        setAgendamentos(agendamentosResponse.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setErrorMessage("Erro ao carregar os dados da API");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Funções de edição
  const startEditing = (item, type) => {
    setEditingItem({ item, type });
    setEditedData(item);  // Copia os dados do item para edição
    document.getElementById("editModal").style.display = "block";
  };

  const saveEditedItem = async () => {
    const { type, item } = editingItem;
    let response;

    try {
      if (type === 'pet') {
        response = await api.put(`/Info_Pet/${item.petId}`, editedData);
        if (response.status === 200) {
          setPets(pets.map(pet => pet.petId === item.petId ? { ...pet, ...editedData } : pet));
          alert('Pet atualizado com sucesso!');
        }
      } else if (type === 'user') {
        response = await api.put(`/users/${item.userId}`, editedData);
        if (response.status === 200) {
          setUsuarios(usuarios.map(usuario => usuario.userId === item.userId ? { ...usuario, ...editedData } : usuario));
          alert('Usuário atualizado com sucesso!');
        }
      } else if (type === 'agendamento') {
        response = await api.put(`/Agen_Vis/${item.agenId}`, editedData);
        if (response.status === 200) {
          setAgendamentos(agendamentos.map(agendamento => agendamento.agenId === item.agenId ? { ...agendamento, ...editedData } : agendamento));
          alert('Agendamento atualizado com sucesso!');
        }
      }
    } catch (error) {
      console.error("Erro ao salvar item:", error);
      alert('Erro ao atualizar');
    } finally {
      setEditingItem(null);
      setEditedData({});
      document.getElementById("editModal").style.display = "none";
    }
  };

  const closeModal = () => {
    document.getElementById("editModal").style.display = "none";
    setEditingItem(null);
    setEditedData({});
  };

  // Função para deletar um item
  const deleteItem = async (id, type) => {
    let response;

    try {
      if (type === 'pet') {
        response = await api.delete(`/Info_Pet/${id}`);
        if (response.status === 200) {
          setPets(pets.filter(pet => pet.petId !== id));
          alert('Pet deletado com sucesso!');
        }
      } else if (type === 'user') {
        response = await api.delete(`/users/${id}`);
        if (response.status === 200) {
          setUsuarios(usuarios.filter(usuario => usuario.userId !== id));
          alert('Usuário deletado com sucesso!');
        }
      } else if (type === 'agendamento') {
        response = await api.delete(`/Agen_Vis/${id}`);
        if (response.status === 200) {
          setAgendamentos(agendamentos.filter(agendamento => agendamento.agenId !== id));
          alert('Agendamento deletado com sucesso!');
        }
      }
    } catch (error) {
      console.error(`Erro ao deletar ${type}:`, error);
      alert(`Erro ao deletar ${type}`);
    }
  };

  return (
    <div className="listagem-container">
      <center><h1>Listagem de Pets, Usuários e Agendamentos</h1></center>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {loading ? (
        <div>Carregando...</div>
      ) : (
        <>
          {/* Modal de Edição */}
          {editingItem && (
            <div id="editModal" className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>{`Editar ${editingItem.type === 'pet' ? 'Pet' : editingItem.type === 'user' ? 'Usuário' : 'Agendamento'}`}</h2>

                {/* Formulário de edição */}
                {editingItem.type === 'pet' && (
                  <>
                    <div>
                      <label>Raça</label>
                      <input
                        type="text"
                        name="infRaca"
                        value={editedData.infRaca || ''}
                        onChange={(e) => setEditedData({ ...editedData, infRaca: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>Espécie</label>
                      <input
                        type="text"
                        name="infEspecie"
                        value={editedData.infEspecie || ''}
                        onChange={(e) => setEditedData({ ...editedData, infEspecie: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>Cor</label>
                      <input
                        type="text"
                        name="infCor"
                        value={editedData.infCor || ''}
                        onChange={(e) => setEditedData({ ...editedData, infCor: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>Data de Nascimento</label>
                      <input
                        type="text"
                        name="infDataNasc"
                        value={editedData.infDataNasc || ''}
                        onChange={(e) => setEditedData({ ...editedData, infDataNasc: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>Peso</label>
                      <input
                        type="text"
                        name="infPeso"
                        value={editedData.infPeso || ''}
                        onChange={(e) => setEditedData({ ...editedData, infPeso: e.target.value })}
                      />
                    </div>
                  </>
                )}
                {editingItem.type === 'user' && (
                  <>
                    <div>
                      <label>Nome</label>
                      <input
                        type="text"
                        name="userName"
                        value={editedData.userName || ''}
                        onChange={(e) => setEditedData({ ...editedData, userName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>Email</label>
                      <input
                        type="text"
                        name="userEmail"
                        value={editedData.userEmail || ''}
                        onChange={(e) => setEditedData({ ...editedData, userEmail: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>Data de Nascimento</label>
                      <input
                        type="text"
                        name="userNasc"
                        value={editedData.userNasc || ''}
                        onChange={(e) => setEditedData({ ...editedData, userNasc: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>Gênero</label>
                      <input
                        type="text"
                        name="userGenero"
                        value={editedData.userGenero || ''}
                        onChange={(e) => setEditedData({ ...editedData, userGenero: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>Senha</label>
                      <input
                        type="text"
                        name="userSenha"
                        value={editedData.userSenha || ''}
                        onChange={(e) => setEditedData({ ...editedData, userSenha: e.target.value })}
                      />
                    </div>
                  </>
                )}
                {editingItem.type === 'agendamento' && (
                  <>
                    <div>
                      <label>Tipo do Serviço</label>
                      <input
                        type="text"
                        name="agenTipo"
                        value={editedData.agenTipo || ''}
                        onChange={(e) => setEditedData({ ...editedData, agenTipo: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>Data do Agendamento</label>
                      <input
                        type="text"
                        name="agenDataAgen"
                        value={editedData.agenDataAgen || ''}
                        onChange={(e) => setEditedData({ ...editedData, agenDataAgen: e.target.value })}
                      />
                    </div>
                  </>
                )}
                <div>
                  <button onClick={saveEditedItem}>Salvar</button>
                  <button onClick={closeModal}>Cancelar</button>
                </div>
              </div>
            </div>
          )}

          {/* Listagem de Pets, Usuários e Agendamentos */}
          <div className="listagem">
            <div className="listagem-coluna">
              <h2>Pets</h2>
              <ul>
                {pets.map((pet) => (
                  <li key={pet.petId}>
                    <div className="pet-info">
                      <p>ID: {pet.petId}</p> {/* Exibe o ID */}
                      <p>Raça: {pet.infRaca}</p>
                      <p>Espécie: {pet.infEspecie}</p>
                      <p>Cor: {pet.infCor}</p>
                      <p>Data de Nascimento: {pet.infDataNasc}</p>
                      <p>Peso: {pet.infPeso}</p>
                    </div>
                    <button onClick={() => startEditing(pet, 'pet')}>Editar</button>
                    <button onClick={() => deleteItem(pet.petId, 'pet')}>Excluir</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="listagem-coluna">
              <h2>Usuários</h2>
              <ul>
                {usuarios.map((usuario) => (
                  <li key={usuario.userId}>
                    <div className="usuario-info">
                      <p>ID: {usuario.userId}</p> {/* Exibe o ID */}
                      <p>Nome: {usuario.userName}</p>
                      <p>Email: {usuario.userEmail}</p>
                      <p>Data de Nascimento: {usuario.userNasc}</p>
                      <p>Gênero: {usuario.userGenero}</p>
                    </div>
                    <button onClick={() => startEditing(usuario, 'user')}>Editar</button>
                    <button onClick={() => deleteItem(usuario.userId, 'user')}>Excluir</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="listagem-coluna">
              <h2>Agendamentos</h2>
              <ul>
                {agendamentos.map((agendamento) => (
                  <li key={agendamento.agenId}>
                    <div className="agendamento-info">
                      <p>ID: {agendamento.agenId}</p> {/* Exibe o ID */}
                      <p>Tipo do Serviço: {agendamento.agenTipo}</p>
                      <p>Data: {agendamento.agenDataAgen}</p>
                    </div>
                    <button onClick={() => startEditing(agendamento, 'agendamento')}>Editar</button>
                    <button onClick={() => deleteItem(agendamento.agenId, 'agendamento')}>Excluir</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Listagem;










