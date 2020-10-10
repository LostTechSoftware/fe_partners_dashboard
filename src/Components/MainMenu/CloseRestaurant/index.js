import React from 'react';
import { Button } from '@material-ui/core';
import { CheckCircleRounded } from '@material-ui/icons';

import './styles.css';

export default function CloseRestaurant() {
  return (
    <div className='closeRestaurant'>
      <Button>
        Fechar agora
      </Button>

      <div className='line' />

      <div className='info'>
        <div className='text'>
          <h2>Restaurante aberto</h2>
          <p>Dentro do horário programado</p>
        </div>

        <CheckCircleRounded />
      </div>
    </div>
  );
}
