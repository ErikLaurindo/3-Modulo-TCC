import { useState } from "react";
import api from "../../services/api";
import './AgenVis.css';
import Rodape from '../Rodape';
import imagem from '../AgenVis/fundo1.png';
const AgenVis = () => {
  const [vTipo, setTipo] = useState('');
  const [vAgen_DataAgen, setAgen_DataAgen] = useState('');
  const [vPetId, setPetId] = useState('');  // Novo estado para o ID do pet
  const handleSubmit = async () => {
    try {
      const response = await api.post('/Agen_Vis', {
        agenTipo: vTipo,
        agenDataAgen: vAgen_DataAgen,
        infoPet: {
          petId: vPetId
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
<div>
<div className="divum">
<h1>Faça Seu Agendamento</h1>
</div>
<div className="app-container">
<div className="form-group">
<label className="label">Tipo do serviço</label>
<br/>
<input type="text" value={vTipo} placeholder="Informe o serviço desejado" onChange={(e) => setTipo(e.target.value)} />
</div>
<div className="form-group">
<label className="label">Data de agendamento</label>
<br/>
<input type="text" value={vAgen_DataAgen} placeholder="Informe a data de agendamento da visita" onChange={(e) => setAgen_DataAgen(e.target.value)} />
</div>
<div className="form-group">
<label className="label">ID do Pet</label>
<br/>
<input type="text" value={vPetId} placeholder="Informe o ID do pet" onChange={(e) => setPetId(e.target.value)} />
</div>
<div className="form-group">
<button onClick={handleSubmit}>Confirmar agendamento</button>
</div>
</div>
<div><img src={imagem} className="imagem" /></div>
<div><Rodape /></div>
</div>  
  );
};
export default AgenVis;
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