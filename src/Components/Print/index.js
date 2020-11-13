import React from 'react';
import NumberFormat from 'react-number-format';

import FoodZillaLogo from '../../assets/logo.png';

const PrinterHeader = () => (
  <head className='print'>
    <h2>
      {sessionStorage.getItem('restaurantName')}
    </h2>
  
    <p>
      {sessionStorage.getItem('restaurantAddress')}
    </p>

    <p>
      Telefone:
      <NumberFormat
        className='result print'
        value={sessionStorage.getItem('restaurantPhone')}
        displayType={'text'}
        format='(##) ##### - ####'
      />
    </p>
  </head>
);

const PrinterFooter = () => (
  <footer className='print'>
    <img className='print' src={FoodZillaLogo} alt='logo foodzilla' />
  </footer>
);

export { PrinterHeader, PrinterFooter };
