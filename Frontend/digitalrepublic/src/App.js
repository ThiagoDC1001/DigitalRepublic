import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Transaction from './pages/Transactions'

import './App.css';

function App() {
  return (
      <>
      <div className="App">  
        <div className="auth-wrapper">
          <div className="auth-inner">

  <Routes>
    <Route exact path="/login" element={ <Login /> } />
    <Route exact path="/login/register" element={ <Register /> } />
    <Route exact path="/transaction" element={ <Transaction /> } />
    <Route exact path="/" element={ <Navigate to="/login" replace /> } />
    </Routes>
          </div>
          </div>
          </div>
  </>
  )
}

export default App;
