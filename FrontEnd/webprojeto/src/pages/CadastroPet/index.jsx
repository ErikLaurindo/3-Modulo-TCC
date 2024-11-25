import { useState } from "react";
import api from "../../services/api";
import './CadastroPet.css';
import Rodape from '../Rodape';

// Função para aplicar a máscara na data
const aplicarMascaraData = (valor) => {
  // Remove qualquer coisa que não seja número
  valor = valor.replace(/\D/g, "");

  // Aplica a máscara DD/MM/YYYY
  if (valor.length <= 2) {
    return valor.replace(/(\d{2})/, "$1");
  } else if (valor.length <= 4) {
    return valor.replace(/(\d{2})(\d{2})/, "$1/$2");
  } else {
    return valor.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  }
};

// Função para validar se a data é no futuro
const validarDataNascimento = (data) => {
  const dataAtual = new Date();
  const partesData = data.split('/');
  const dataNascimento = new Date(`${partesData[2]}-${partesData[1]}-${partesData[0]}`);

  return dataNascimento <= dataAtual;
};

const CadastroPet = () => {
  const [vRaca, setRaca] = useState('');
  const [vEspecie, setEspecie] = useState('');
  const [vCor, setCor] = useState('');
  const [vInf_DataNasc, setInf_DataNasc] = useState('');
  const [vPeso, setPeso] = useState('');
  const [vId, setUser_Id] = useState('');
  const [erroData, setErroData] = useState('');

  // Dados das raças para diferentes espécies
  const racasPorEspecie = {
    Cão: ["Labrador", "Bulldog", "Poodle", "Chihuahua", "Beagle", "Pastor Alemão"],
    Gato: ["Siamês", "Persa", "Maine Coon", "Bengal", "Sphynx"],
    Coelho: ["Mini Rex", "Holland Lop", "Angorá", "Lionhead"],
    Pássaro: ["Canário", "Periquito", "Cacatua", "Papagaio"]
  };

  // Função para atualizar a seleção de raça de acordo com a espécie
  const handleEspecieChange = (e) => {
    setEspecie(e.target.value);
    setRaca(''); // Limpa o campo de raça quando a espécie mudar
  };

  // Função para atualizar o peso, garantindo que o valor seja o máximo da faixa
  const handlePesoChange = (e) => {
    const selectedPeso = e.target.value;
    setPeso(selectedPeso); // A opção selecionada será mostrada corretamente
  };

  // Função para lidar com a mudança na data de nascimento com a máscara aplicada
  const handleDataChange = (e) => {
    const dataComMascara = aplicarMascaraData(e.target.value);
    setInf_DataNasc(dataComMascara);

    // Valida a data de nascimento para não ser no futuro
    if (dataComMascara.length === 10 && !validarDataNascimento(dataComMascara)) {
      setErroData('A data de nascimento não pode ser no futuro.');
    } else {
      setErroData('');
    }
  };

  const handleSubmit = async () => {
    // Verifica se a data de nascimento é válida antes de enviar
    if (erroData) {
      alert("Corrija a data de nascimento.");
      return;
    }

    try {
      const response = await api.post('/Info_Pet', {
        infRaca: vRaca,
        infEspecie: vEspecie,
        infCor: vCor,
        infDataNasc: vInf_DataNasc,
        infPeso: vPeso,
        user: { userId: vId }
      });

      const novoPet = response.data;

      if (novoPet) {
        // Verifique se os campos necessários existem na resposta
        const petToStore = {
          infRaca: novoPet.infRaca || vRaca,
          infEspecie: novoPet.infEspecie || vEspecie,
          infCor: novoPet.infCor || vCor,
          infDataNasc: novoPet.infDataNasc || vInf_DataNasc,
          infPeso: novoPet.infPeso || vPeso,
        };

        const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
        storedPets.push(petToStore);
        localStorage.setItem('pets', JSON.stringify(storedPets));

        // Dispara um evento para notificar que pets foram atualizados
        window.dispatchEvent(new Event('petsUpdated'));

        // Limpa os campos após o envio
        setRaca('');
        setEspecie('');
        setCor('');
        setInf_DataNasc('');
        setPeso('');
        setUser_Id('');

        // Exibe o alerta de sucesso
        alert("Cadastro do Pet realizado com sucesso!");
      } else {
        console.error('Formato de resposta inesperado:', novoPet);
      }
    } catch (error) {
      console.log('Erro ao cadastrar pet:', error);
      alert("Ocorreu um erro ao cadastrar o Pet. Tente novamente.");
    }
  };

  return (
    <div>
      <div className="divCadastropet">
        <h1 className="Façaocadastrodopet">Faça o Cadastro do Seu Pet</h1>
      </div>
      <div className="app-container">
        <div className="form-group1">
          <label className="labelcadastrodopet">Espécie</label>
          <select value={vEspecie} onChange={handleEspecieChange} className="input-select">
            <option value="">Selecione a Espécie</option>
            <option value="Cão">Cão</option>
            <option value="Gato">Gato</option>
            <option value="Coelho">Coelho</option>
            <option value="Pássaro">Pássaro</option>
            {/* Adicione mais opções de espécies */}
          </select>
        </div>

        <div className="form-group1">
          <label className="labelcadastrodopet">Raça</label>
          <select value={vRaca} onChange={(e) => setRaca(e.target.value)} className="input-select" disabled={!vEspecie}>
            <option value="">Selecione a Raça</option>
            {vEspecie && racasPorEspecie[vEspecie]?.map((raca, index) => (
              <option key={index} value={raca}>{raca}</option>
            ))}
          </select>
        </div>

        <div className="form-group1">
          <label className="labelcadastrodopet">Cor</label>
          <select value={vCor} onChange={(e) => setCor(e.target.value)} className="input-select">
            <option value="">Selecione a Cor</option>
            <option value="Branco">Branco</option>
            <option value="Preto">Preto</option>
            <option value="Marrom">Marrom</option>
            <option value="Cinza">Cinza</option>
            {/* Adicione mais opções de cores */}
          </select>
        </div>

        <div className="form-group1">
          <label className="labelcadastrodopet">Data de Nascimento</label>
          <input
            type="text"
            value={vInf_DataNasc}
            placeholder="DD/MM/AAAA"
            onChange={handleDataChange}
            maxLength={10} // Limita a entrada de caracteres a 10 (formato DD/MM/YYYY)
            className="input-text"
          />
          {erroData && <span className="erro-data">{erroData}</span>}
        </div>

        <div className="form-group1">
          <label className="labelcadastrodopet">Peso</label>
          <select value={vPeso} onChange={handlePesoChange} className="input-select">
            <option value="">Selecione o Peso</option>
            <option value="1-5kg">1-5kg</option>
            <option value="6-10kg">6-10kg</option>
            <option value="11-20kg">11-20kg</option>
            <option value="21-30kg">21-30kg</option>
            <option value="31kg+">31kg+</option>
            {/* Adicione mais opções de peso */}
          </select>
        </div>

        <div className="form-group1">
          <label className="labelcadastrodopet">ID do Usuário</label>
          <input
            type="text"
            value={vId}
            placeholder="Informe o ID do Usuário"
            onChange={(e) => setUser_Id(e.target.value)}
            className="input-text"
          />
        </div>

        <div className="form-group1">
          <button onClick={handleSubmit}>Criar Cadastro do Pet</button>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default CadastroPet;




 
/*import { useState } from "react";
import api from "../../services/api";
import './CadastroPet.css';
import Rodape from '../Rodape';
import imagem from './fundoum,.png';

const CadastroPet = () => {
  const [raca, setRaca] = useState('');
  const [especie, setEspecie] = useState('');
  const [cor, setCor] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [peso, setPeso] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await api.post('/InfoPet', {
        infRaca: raca,
        infEspecie: especie,
        infCor: cor,
        infDataNasc: dataNasc,
        infPeso: peso,
        userId: userId
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <div className="divum">
        <h1>Faça Seu Cadastro</h1>
      </div>
      <div className="app-container">
        <div className="form-group">
          <label className="label">Raça</label>
          <br/>
          <input type="text" value={raca} placeholder="Informe a Raça" onChange={(e) => setRaca(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label">Especie</label>
          <br/>
          <input type="text" value={especie} placeholder="Informe a espécie" onChange={(e) => setEspecie(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label">Cor</label>
          <br/>
          <input type="text" value={cor} placeholder="Informe a cor" onChange={(e) => setCor(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label">Data de Nascimento</label>
          <br/>
          <input type="text" value={dataNasc} placeholder="Informe a data de nascimento" onChange={(e) => setDataNasc(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label">Peso</label>
          <br/>
          <input type="text" value={peso} placeholder="Informe o peso" onChange={(e) => setPeso(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label">ID do Usuário</label>
          <br/>
          <input type="text" value={userId} placeholder="Informe o ID do usuário" onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div className="form-group">
          <button onClick={handleSubmit}>Criar Cadastro do Pet</button>
        </div>
      </div>
      <div><img src={imagem} className="imagem" /></div>
      <div><Rodape /></div>
    </div>
  );
};

export default CadastroPet;*/
 
/*import React, { useState, useEffect } from 'react';
import './CadastroPet.css';
import axios from 'axios';
function CadastroPet() {
   const [formData, setFormData] = useState({
       Inf_Especie: '',
       Inf_Raca: '',
       Inf_Cor: '',
       Inf: '',
       Inf_DataNasc: '',
       Inf_peso: '',
       User_Id: ''
   });
   const [pets, setPets] = useState([]);
   // Objeto com as raças de cada espécie
   const racas = {
       Gato: ['Persa', 'Siamês', 'Maine Coon', 'Sphynx'],
       Cachorro: ['Labrador', 'Bulldog', 'Beagle', 'Poodle']
   };
   // Lista de cores populares
   const cores = ['Preto', 'Branco', 'Cinza', 'Marrom', 'Amarelo', 'Tigrado'];
   useEffect(() => {
       const fetchPets = async () => {
           try {
               const response = await axios.get('Info_Pet');
               setPets(Array.isArray(response.data) ? response.data : []);
           } catch (error) {
               console.error('Erro ao buscar pets:', error);
           }
       };
       fetchPets();
   }, []);
   const handleChange = (e) => {
       const { name, value } = e.target;
       if (name === "Inf_peso" && value > 30) {
           alert("O peso máximo permitido é 30kg.");
           return;
       }
       setFormData({
           ...formData,
           [name]: value
       });
   };
   useEffect(() => {
    const testPost = async () => {
      try {
        const response = await axios.post('/Info_Pet', {
          Inf_Especie: 'Gato',
          Inf_Raca: 'Persa',
          Inf_Cor: 'Branco',
          Inf: 'Amigável',
          Inf_DataNasc: '2023-01-01',
          Inf_peso: 5,
          User_Id: 1
        });
        console.log('Teste de envio bem-sucedido:', response.data);
      } catch (error) {
        console.error('Erro no teste de envio:', error);
      }
    };
    testPost();
   }, []);}
   const handleSubmit = async (e) => {
       e.preventDefault();
       try {
           const response = await axios.post('Info_Pet', formData);
           console.log('Dados enviados com sucesso:', response.data);
           setPets([...pets, response.data]);
           setFormData({
               Inf_Especie: '',
               Inf_Raca: '',
               Inf_Cor: '',
               Inf: '',
               Inf_DataNasc: '',
               Inf_peso: '',
               User_Id: ''
           });
       } catch (error) {
           console.error('Erro ao enviar os dados:', error);
       }
   };
   return (
<div className="cadastrop">
<div>
<h1 className="TextoCentral">Cadastro de pets</h1>
<br />
<form onSubmit={handleSubmit}>
<div className="form-group">
<label className="label">Espécie:</label>
<select
                           className="select"
                           name="Inf_Especie"
                           value={formData.Inf_Especie}
                           onChange={handleChange}
>
<option value="">Selecione</option>
<option value="Gato">Gato</option>
<option value="Cachorro">Cachorro</option>
</select>
</div>
<div className="form-group">
<label className="label">Raça:</label>
<select
                           className="select"
                           name="Inf_Raca"
                           value={formData.Inf_Raca}
                           onChange={handleChange}
                           disabled={!formData.Inf_Especie}
>
<option value="">Selecione</option>
                           {formData.Inf_Especie && racas[formData.Inf_Especie].map((raca, index) => (
<option key={index} value={raca}>{raca}</option>
                           ))}
</select>
</div>
<div className="form-group">
<label className="label">Cor:</label>
<select
                           className="select"
                           name="Inf_Cor"
                           value={formData.Inf_Cor}
                           onChange={handleChange}
>
<option value="">Selecione</option>
                           {cores.map((cor, index) => (
<option key={index} value={cor}>{cor}</option>
                           ))}
</select>
</div>
<div className="form-group">
<label className="label">Informação adicional:</label>
<input
                           type="text"
                           name="Inf"
                           value={formData.Inf}
                           onChange={handleChange}
                       />
</div>
<div className="form-group">
<label className="label">Data de Nascimento:</label>
<input
                           type="date"
                           name="Inf_DataNasc"
                           value={formData.Inf_DataNasc}
                           onChange={handleChange}
                       />
</div>
<div className="form-group">
<label className="label">Peso (kg):</label>
<input
                           type="number"
                           name="Inf_peso"
                           value={formData.Inf_peso}
                           onChange={handleChange}
                           min="0"
                           max="30" // Limite de 30kg
                           step="1.00"
                       />
</div>
<div className="form-group">
<label className="label">ID do Usuário:</label>
<input
                           type="number"
                           name="User_Id"
                           value={formData.User_Id}
                           onChange={handleChange}
                       />
</div>
<button type="submit">Enviar</button>
</form>
</div>
<div>
<h1 className="TextoCentral">Pets Cadastrados:</h1>
<table className="pets-table">
<thead>
<tr>
<th>Espécie</th>
<th>Raça</th>
<th>Cor</th>
<th>Informação adicional</th>
<th>Data de Nascimento</th>
<th>Peso (kg)</th>
<th>ID do Usuário</th>
</tr>
</thead>
<tbody>
                       {Array.isArray(pets) && pets.map((pet, index) => (
<tr key={index}>
<td>{pet.Inf_Especie}</td>
<td>{pet.Inf_Raca}</td>
<td>{pet.Inf_Cor}</td>
<td>{pet.Inf}</td>
<td>{pet.Inf_DataNasc}</td>
<td>{pet.Inf_peso}</td>
<td>{pet.User_Id}</td>
</tr>
                       ))}
</tbody>
</table>
</div>
</div>
   );
}/*
export default CadastroPet;
/*import React, { useState, useEffect } from 'react';
import './CadastroPet.css';
import axios from 'axios';
function CadastroPet() {
    const [formData, setFormData] = useState({
        Inf_Especie: '',
        Inf_Raca: '',
        Inf_Cor: '',
        Inf: '',
        Inf_DataNasc: '',
        Inf_peso: '',
        User_Id: ''
    });
    const [pets, setPets] = useState([]); // Certifique-se de que seja um array
    // Objeto com as raças de cada espécie
    const racas = {
        Gato: ['Persa', 'Siamês', 'Maine Coon', 'Sphynx'],
        Cachorro: ['Labrador', 'Bulldog', 'Beagle', 'Poodle']
    };
    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('Info_Pet');
                setPets(Array.isArray(response.data) ? response.data : []); // Garante que `pets` seja um array
            } catch (error) {
                console.error('Erro ao buscar pets:', error);
            }
        };
        fetchPets();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('Info_Pet', formData);
            console.log('Dados enviados com sucesso:', response.data);
            setPets(prevPets => [...prevPets, response.data]); // Atualiza o array `pets`
            setFormData({
                Inf_Especie: '',
                Inf_Raca: '',
                Inf_Cor: '',
                Inf: '',
                Inf_DataNasc: '',
                Inf_peso: '',
                User_Id: ''
            });
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };
    return (
        <div className="cadastrop">
            <div>
                <h1 className="TextoCentral">Cadastro de pets</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label">Espécie:</label>
                        <select
                            className="select"
                            name="Inf_Especie"
                            value={formData.Inf_Especie}
                            onChange={handleChange}
                        >
                            <option value="">Selecione</option>
                            <option value="Gato">Gato</option>
                            <option value="Cachorro">Cachorro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label">Raça:</label>
                        <select
                            className="select"
                            name="Inf_Raca"
                            value={formData.Inf_Raca}
                            onChange={handleChange}
                            disabled={!formData.Inf_Especie} // Desabilita se não houver espécie selecionada
                        >
                            <option value="">Selecione</option>
                            {formData.Inf_Especie && racas[formData.Inf_Especie].map((raca, index) => (
                                <option key={index} value={raca}>{raca}</option>
                            ))}
                        </select>
                    </div>
                    {/* Outros campos do formulário }*/

                    /*
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div>
                <h1 className="TextoCentral">Pets Cadastrados:</h1>
                <table className="pets-table">
                    <thead>
                    <tr>
                        <th>Espécie</th>
                        <th>Raça</th>
                        <th>Cor</th>
                        <th>Informação adicional</th>
                        <th>Data de Nascimento</th>
                        <th>Peso (kg)</th>
                        <th>ID do Usuário</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(pets) && pets.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.Inf_Especie}</td>
                            <td>{pet.Inf_Raca}</td>
                            <td>{pet.Inf_Cor}</td>
                            <td>{pet.Inf}</td>
                            <td>{pet.Inf_DataNasc}</td>
                            <td>{pet.Inf_peso}</td>
                            <td>{pet.User_Id}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CadastroPet;
*/