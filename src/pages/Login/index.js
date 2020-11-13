import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import api from '../../services/api';
import MainButton from '../../Components/MainButton';
import 'react-toastify/dist/ReactToastify.css'
import './styles.css';

export default function Login() {
  const history = useHistory();

  const [ email, setEmail ] = useState('');
  const [loading, setLoading] = useState(false)
  const [ password, setPassword ] = useState('');

  async function tryLogin(event) {
    event.preventDefault();
    setLoading(true)
    try {
      const response = await api.post('/restaurant/authenticate', {
        email,
        password
      });
      
      const { token } = response.data;
      const { _id, name, avatar} = response.data.user;
      const restaurantLocation = JSON.stringify(response.data.user.location.coordinates);
      
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('_id', _id);
      sessionStorage.setItem('avatar', avatar);
      sessionStorage.setItem('restaurantName', name);
      sessionStorage.setItem('restaurantLocation', restaurantLocation);

      setLoading(false)
      history.push('/requests');
    } catch (error) {
      setLoading(false)
      toast.error('usúario ou senha incorretos, tente novamente!')
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

        <MainButton type='submit' loading={loading}>
          Logar
        </MainButton>
      </form>
    </div>
  )
}
