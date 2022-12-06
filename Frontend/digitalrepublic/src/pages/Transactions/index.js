import React, { useState } from 'react';
import { postRequest } from '../../../src/services/request'


function Transaction () {
  const [transferValue, setTranferValue] = useState(0)
  const [creditedCpf, setCreditedCpf] = useState('')
  const [transfSuss, setTransferSuss] = useState('')

  async function transferBtn(event) {
    event.preventDefault();

    try {

      const debitedCpf = JSON.parse(localStorage.getItem('user')).cpf
      
      const dataTransaction = { debitedCpf, creditedCpf, transferValue }
      
      await postRequest('./transaction', dataTransaction).then(
        (response) => {setTransferSuss(response.message)}).catch(
        (error) => {setTransferSuss(error.response.data.message)},)

      
      
    } catch (error) {
      console.log(error)
    }
    
  }
  

    return (
      <>
      <h3>Transação</h3>
      <div className="mb-3">
      <input
      className='input'      
      placeholder='CPF da pessoa creditada'
      value={ creditedCpf }
      onChange={(e) => setCreditedCpf(e.target.value)}
      />
      </div>
        <label>Valor a transferir</label>
      <div className="mb-3">
      <input
      className='input'      
      type='number'
      placeholder='Valor a ser transferido'
      value={ transferValue }
      onChange={ (e) => setTranferValue(e.target.value)}
      />
      </div>
      <button
      type='button'
      className='btn btn-primary'
      disabled={ transferValue >= 2000 }             
      onClick={ transferBtn }
      >
        Transferir quantia        
      </button>

      { 
        (transfSuss !== '') ? ( <p> {transfSuss} </p>
        ) : null           
      } 
      { 
        (transferValue >= 2000) ? ( <p> Só são permitidas transações de até R$2000 </p> ) 
        : null           
      }     
      </>
      )
    }

  export default Transaction; 