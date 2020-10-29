import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import MainButton from '../../Components/MainButton';

import './styles.css';

export default function Login() {
  const history = useHistory();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function tryLogin(event) {
    event.preventDefault();
    
    try {
      const response = await api.post('/restaurant/authenticate', {
        email,
        password
      });
      
      const { token } = response.data;
      const { _id, name, avatar} = response.data.user
      
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('_id', _id);
      sessionStorage.setItem('avatar', avatar);
      sessionStorage.setItem('restaurantName', name);

      history.push('/requests');
    } catch (error) {
      console.log(error);
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
