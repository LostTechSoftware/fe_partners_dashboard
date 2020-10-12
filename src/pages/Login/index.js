import React, { useState } from 'react';
import MainButton from '../../Components/MainButton';

import './styles.css';

export default function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function tryLogin(event) {
    event.preventDefault();
    try {
      alert('I try')
    } catch (error) {
      return error;
    }
  }

  return (
    <div className='page login'>
      <form onSubmit={tryLogin} >
        <input
          type='text'
          placeholder='E-mail'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <MainButton type='submit'>
          Login
        </MainButton>
      </form>
    </div>
  )
}
