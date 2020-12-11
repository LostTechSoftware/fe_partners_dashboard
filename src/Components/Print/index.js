import React from 'react';
import NumberFormat from 'react-number-format';

import FoodZillaLogo from '../../assets/logo.png';

const PrinterHeader = () => (
  <head className='print'>
    <h2>
      {sessionStorage.getItem('restaurantName')}
    </h2>

    <PrintUnderLine />
  
    <span> Endereço: </span>
    <p>
      {sessionStorage.getItem('restaurantAddress')}
    </p>

    <span> Telefone: </span>
    <p>
      <NumberFormat
        className='result print'
        value={sessionStorage.getItem('restaurantPhone')}
        displayType={'text'}
        format='(##) ##### - ####'
      />
    </p>
    <PrintUnderLine />
  </head>
);

const PrinterFooter = () => (
  <footer className='print'>
    <img className='print' src={FoodZillaLogo} alt='logo foodzilla' />
  </footer>
);

const PrintUnderLine = () => <div className='print printUnderLine' />

export { PrinterHeader, PrinterFooter, PrintUnderLine };
