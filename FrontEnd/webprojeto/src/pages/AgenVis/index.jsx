import { useState, useEffect } from 'react';
import './AgenVis.css';
import Rodape from '../Rodape';
import api from "../../services/api"; // Importação da API
import ReactInputMask from "react-input-mask"; // Importando a biblioteca de máscara

const AgenVis = () => {
  const [vTipo, setTipo] = useState('');
  const [vAgen_DataAgen, setAgen_DataAgen] = useState('');
  const [vPetId, setPetId] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedAgendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    setAgendamentos(storedAgendamentos);
  }, []);

  // Função para formatar a data de dd/mm/yyyy para yyyy-mm-dd
  const formatarData = (data) => {
    const partes = data.split('/');
    if (partes.length === 3) {
      return `${partes[2]}-${partes[1]}-${partes[0]}`; // Converte data de "dd/mm/yyyy" para "yyyy-mm-dd"
    }
    return data;
  };

  // Função para validar se a data inserida é válida
  const isValidDate = (dateString) => {
    const dateParts = dateString.split('/');
    if (dateParts.length !== 3) return false;

    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);

    const date = new Date(year, month - 1, day); // O mês em JavaScript começa do 0
    return date.getDate() === day && date.getMonth() + 1 === month && date.getFullYear() === year;
  };

  // Função para verificar se a data inserida é no passado
  const isDateInThePast = (dateString) => {
    const today = new Date();
    const [day, month, year] = dateString.split('/');
    const inputDate = new Date(`${year}-${month}-${day}`);
    return inputDate <= today; // Verifica se a data inserida é menor ou igual a hoje (data passada ou igual)
  };

  // Função de envio do formulário
  const handleSubmit = async () => {
    const newErrors = {};

    // Verificação de campos obrigatórios
    if (!vTipo || !vAgen_DataAgen || !vPetId) {
      newErrors.fields = "Por favor, preencha todos os campos.";
    }

    // Validação de data de agendamento
    if (!isValidDate(vAgen_DataAgen)) {
      newErrors.date = "Data de agendamento inválida. Por favor, insira uma data válida no formato dd/mm/yyyy.";
    } else if (isDateInThePast(vAgen_DataAgen)) {
      newErrors.date = "Não é possível agendar para uma data no passado ou hoje. Apenas datas no futuro são permitidas.";
    }

    setErrors(newErrors);

    // Se houver erros, não envia o formulário
    if (Object.keys(newErrors).length > 0) return;

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
          <select className='selectagen' value={vTipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Banho">Banho</option>
            <option value="Consulta">Consulta</option>
            <option value="Tosa">Tosa</option>
          </select>
        </div>
        <div className="form-group1">
          <label>Data de agendamento</label>
          <br />
          <ReactInputMask
            mask="99/99/9999" // Máscara de data no formato dd/mm/yyyy
            value={vAgen_DataAgen}
            placeholder="Informe a data de agendamento (dd/mm/yyyy)"
            onChange={(e) => setAgen_DataAgen(e.target.value)}
          />
          {errors.date && <p className="error">{errors.date}</p>}
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
        {errors.fields && <p className="error">{errors.fields}</p>}
      </div>
      <Rodape />
    </div>
  );
};

export default AgenVis;

