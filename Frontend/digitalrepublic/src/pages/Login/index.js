import React, { useState, useEffect } from 'react';
import { postRequest, setToken, getRequest } from '../../../src/services/request'
import { useNavigate, Navigate } from 'react-router-dom';
import { cpf } from 'cpf-cnpj-validator';


function Login() {
  const [userCpf, setUserCpf] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false)
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const navigate = useNavigate();


  async function btnSubmit(event) {    
    event.preventDefault();
      
    const bodyRequest = { cpf: userCpf, password: password}
    try {
      const { token } = await postRequest('/login', bodyRequest);
      setToken(token);
      
      const userData = await getRequest('/login/validate')  

      localStorage.setItem('user', JSON.stringify(userData));

      setIsLogged(true)
    } catch (error) {      
      setFailedTryLogin(true)      
    }
  }

  useEffect(() => {
    async function verifyLocalStorageUser(token) {
      try {
        setToken(token);
        const userData = await getRequest('/longin/validate');
        if (userData) {
          localStorage.setItem('user', JSON.stringify(userData));
          navigate('/transaction')
        }
      }catch (error) {
        console.log(error)
      }
    }
    const logUser = JSON.parse(localStorage.getItem('user'));
    if(logUser) verifyLocalStorageUser(logUser.token)
  }, [navigate])

  useEffect(() => {
    setFailedTryLogin(false);
  }, [userCpf, password]);
  
  function btnRegister() {
    navigate('/login/register');
  }

  if (isLogged) {
    return <Navigate to="/transaction" />
  }

  
    return (
      <forms>
        <h1>Login</h1>
        <div className="mb-3">

        
        <input
          className='input'          
          type='text'
          placeholder='CPF'
          value={ userCpf }
          onChange={ (e) => setUserCpf(e.target.value) }
          />
        </div>
        <div className="mb-3">

        
        <input 
          className='input'          
          type='password'
          placeholder='Password'
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          />
          </div>
          <div className="d-grid">
        <button
          type='button'
          className='btn btn-primary'
          disabled={ !(cpf.isValid(userCpf))}
          onClick={ btnSubmit }
          >
            Login
        </button>
        </div>
        <button
          type='button'
          className='btn btn-primary'
          onClick={ btnRegister }
          >
            Register
        </button>
        {
          (failedTryLogin)
            ? (
              <p> {`O CPF ou senha não estão corretos. Por favor tente novamente`} </p>
            )
            : null}
      </forms>
    )
  }

  export default Login;