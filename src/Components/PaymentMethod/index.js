import React, { useState, useEffect } from 'react';
import './styles.css';

export default function PaymentMethod({ children }) {
  const [ response, setResponse ] = useState('');
  
  useEffect(() => {
    switch (children) {        
      case 'online':
        setResponse('online');
        break;
        
      case 'card': 
        setResponse( 'Cartão');
        break;
      
      case 'cash': 
        setResponse('Dinheiro');
        break;
    }
  }, [children]);
   
  return (
    <span className='paymentMethod'>
      { response }
    </span>
  )
}
