import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading/Loading'
import { responseTestPerson } from '../types/types'
import Input from '../components/Input/Input'
import './TestPerson.css'

const TestPerson: React.FC = () => {
  const [data, setData] = useState<responseTestPerson>(Object);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Gerador de Pessoa";

    // Substitua a URL abaixo pela URL da sua API
    axios.get<responseTestPerson>('http://localhost:4000/TestPerson')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data ' + err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className='container'>
        <form className='form-container' title='Gerador document'>
          <h2 className='fon'> Gerador de Pessoa </h2>
          <label className='form-label'> Primeiro Nome: </label>
          <Input
            value={data.data.firstName}
          ></Input>

          <label className='form-label'> Ultimo Nome: </label>
          <Input
            value={data.data.lastName}
          ></Input>

          <label className='form-label'>Nome completo: </label>
          <Input
            value={data.data.fullName}
          ></Input>

          <label className='form-label'>E-mail: </label>
          <Input
            value={data.data.email}
          ></Input>

          <label className='form-label'>CPF: </label>
          <Input
            value={data.data.cpf}
          ></Input>

          <label className='form-label'>CEP: </label>
          <Input
            value={data.data.cep}
          ></Input>

          <button className='form-button'>Gerar</button>
        </form>
      </div>
    </>
  )

};

export default TestPerson;