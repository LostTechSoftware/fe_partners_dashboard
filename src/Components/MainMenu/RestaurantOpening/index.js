import React, { useState, useEffect } from 'react';
import { CheckCircleRounded } from '@material-ui/icons';

import MainButton from '../../../Components/MainButton';
import api from '../../../services/api';
import './styles.css';

export default function RestaurantOpening() {
  const [ restaurantIsOpen, setRestaurantIsOpen ] = useState(false);

  async function closeRestaurant() {
    const response = await api.post('/close');
    setRestaurantIsOpen(response.data.open);
  }

  async function openRestaurant() {
    const response = await api.post('/open');
    setRestaurantIsOpen(response.data.open);
  }

  function controlRestaurantOpening() {
    if(restaurantIsOpen)
      closeRestaurant();
    else
      openRestaurant();
    localStorage.setItem('restaurantIsOpen', restaurantIsOpen);
  }

  useEffect(() => {
    const restaurantIsOpenOnStorage = localStorage.getItem('restaurantIsOpen');
    setRestaurantIsOpen(restaurantIsOpenOnStorage);
  }, []);

  return (
    <div className='restaurantOpening'>
      <MainButton onClick={ controlRestaurantOpening } >
        { restaurantIsOpen ? 'Fechar agora' : 'Abrir agora' }
      </MainButton>

      <div className='line' />

      <div className='info'>
        <div className='text'>
          <h2>
            { restaurantIsOpen ? 'Restaurante aberto' : 'Restaurante fechado' }
          </h2>
        </div>

        <CheckCircleRounded />
      </div>
    </div>
  );
}
