import React from 'react';
import { Button } from '@material-ui/core';
import { CheckCircleRounded } from '@material-ui/icons';

import api from '../../../services/api';
import './styles.css';

export default function RestaurantOpening() {
  async function closeRestaurant() {
    console.log('close');
    const response = await api.post('/close');
    console.log(response);
  }

  async function openRestaurant() {
    console.log('open');
    const response = await api.post('/open');
    console.log(response);
  }

  return (
    <div className='restaurantOpening'>
      <Button>
        Fechar agora
      </Button>

      <div className='line' />

      <div className='info'>
        <div className='text'>
          <h2>Restaurante aberto</h2>
        </div>

        <CheckCircleRounded />
      </div>
    </div>
  );
}
