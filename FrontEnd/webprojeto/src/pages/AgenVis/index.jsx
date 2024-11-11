

import { useState, useEffect } from 'react';
import './AgenVis.css';
import Rodape from '../Rodape';
import api from "../../services/api"; // Importação da API

const AgenVis = () => {
  const [vTipo, setTipo] = useState('');
  const [vAgen_DataAgen, setAgen_DataAgen] = useState('');
  const [vPetId, setPetId] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const storedAgendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    setAgendamentos(storedAgendamentos);
  }, []);

  const formatarData = (data) => {
    const partes = data.split('/');
    if (partes.length === 3) {
      return `${partes[2]}-${partes[1]}-${partes[0]}`; // Converte data de "dd/mm/yyyy" para "yyyy-mm-dd"
    }
    return data;
  };

  const handleSubmit = async () => {
    if (!vTipo || !vAgen_DataAgen || !vPetId) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const dataFormatada = formatarData(vAgen_DataAgen);

    const novoAgendamento = {
      agenTipo: vTipo,
      agenDataAgen: dataFormatada,
      infoPet: { petId: vPetId }
    };

    console.log("Agendamento enviado:", novoAgendamento); // Log para ver os dados enviados

    try {
      const response = await api.post('/Agen_Vis', novoAgendamento);
      const agendamentoCriado = response.data;

      console.log("Agendamento criado:", agendamentoCriado); // Log para ver os dados retornados

      const updatedAgendamentos = [...agendamentos, agendamentoCriado];
      setAgendamentos(updatedAgendamentos);
      localStorage.setItem('agendamentos', JSON.stringify(updatedAgendamentos));

      window.dispatchEvent(new Event('agendamentosUpdated'));

      setTipo('');
      setAgen_DataAgen('');
      setPetId('');

      alert("Agendamento realizado com sucesso!");

    } catch (error) {
      console.error('Erro ao realizar agendamento:', error);
      alert("Ocorreu um erro ao realizar o agendamento. Tente novamente.");
    }
  };

  return (
    <div>
      <div className="divagendamento">
        <h1 className="façaseuagendamento">Faça Seu Agendamento</h1>
      </div>
      <div className="app-container">
        <div className="form-group1">
          <label>Tipo do serviço</label>
          <br />
          <select value={vTipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Banho">Banho</option>
            <option value="Consulta">Consulta</option>
            <option value="Tosa">Tosa</option>
          </select>
        </div>
        <div className="form-group1">
          <label>Data de agendamento</label>
          <br />
          <input
            type="text"
            value={vAgen_DataAgen}
            placeholder="Informe a data de agendamento (dd/mm/yyyy)"
            onChange={(e) => setAgen_DataAgen(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <label>ID do Pet</label>
          <br />
          <input
            type="text"
            value={vPetId}
            placeholder="Informe o ID do pet"
            onChange={(e) => setPetId(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <button onClick={handleSubmit}>Confirmar agendamento</button>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default AgenVis;
