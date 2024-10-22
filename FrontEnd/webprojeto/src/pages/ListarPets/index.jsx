

import { useEffect, useState } from "react";
import './listaPets.css';
import Rodape from '../Rodape';

const Listagem = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [pets, setPets] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const storedUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
    const storedAgendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    
    setUsuarios(storedUsuarios);
    setPets(storedPets);
    setAgendamentos(storedAgendamentos);

    // Log para verificar os dados carregados
    console.log('Usuários carregados:', storedUsuarios);
    console.log('Pets carregados:', storedPets);
    console.log('Agendamentos carregados:', storedAgendamentos);
  }, []);

  return (
    <div className="listagem-container">
      <h1>Listagem de Cadastros</h1>
      
      <h2>Usuários</h2>
      {usuarios.map((usuario, index) => (
        <div key={index}>
          <p><strong>Nome:</strong> {usuario.userName}</p>
          <p><strong>Email:</strong> {usuario.userEmail}</p>
        </div>
      ))}
      
      <h2>Pets</h2>
      {pets.length > 0 ? (
        pets.map((pet, index) => (
          <div key={index}>
            <p><strong>Raça:</strong> {pet.infRaca}</p>
            <p><strong>Espécie:</strong> {pet.infEspecie}</p>
          </div>
        ))
      ) : (
        <p>Nenhum pet cadastrado.</p>
      )}
      
      <h2>Agendamentos</h2>
      {agendamentos.length > 0 ? (
        agendamentos.map((agendamento, index) => (
          <div key={index}>
            <p><strong>Tipo:</strong> {agendamento.agenTipo}</p>
            <p><strong>Data:</strong> {agendamento.agenDataAgen}</p>
          </div>
        ))
      ) : (
        <p>Nenhum agendamento cadastrado.</p>
      )}
      
      <Rodape />
    </div>
  );
};

export default Listagem;
