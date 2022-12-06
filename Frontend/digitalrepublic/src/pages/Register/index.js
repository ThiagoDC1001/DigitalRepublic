import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { postRequest } from '../../services/request';
import { cpf } from 'cpf-cnpj-validator';

export default function Register () {
  const [name, setName] = useState('');
  const [userCpf, setUserCpf] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryCreate, setFailedTryCreate] = useState(false);

  async function btnSubmit() {
    try {
      const bodyRequestCreate = {
        name: name, cpf: userCpf, password: password,
      };
      
      const userData = await postRequest('/login/register', bodyRequestCreate);
      localStorage.setItem('user', JSON.stringify(userData));      

      setIsLogged(true)
    } catch (error) {
      setFailedTryCreate(true);
      setIsLogged(false);
    }
  }

  useEffect(() => {
    setFailedTryCreate(false);
  }, [name, userCpf, password]);

  if (isLogged) return <Navigate to="/transaction" />;
  
    return (
      <forms>
        <h3> Register </h3>
        <div className="mb-3">          
        <input
          className='input'          
          type='text'
          placeholder='Nome'
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          />
        </div>
        <div className="mb-3">   
        <input
          className='input'          
          type="text"
          placeholder='CPF'
          value={ userCpf }
          onChange={ (e) => setUserCpf(e.target.value) }
        />
        </div>
        <div className="mb-3">   
        <input
          className="input"
          id="password"
          type="text"
          placeholder="Senha"
          value= { password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        </div>
        <button
        type="button"    
        className='btn btn-primary'    
        disabled={ !(cpf.isValid(userCpf))}
        onClick= { btnSubmit }
        >
          Cadastrar
        </button>
        {
          failedTryCreate
            && (
              <p>
                Os campos Nome ou CPF são inválidos
              </p>
            )
        }
      </forms>
    );
  }
