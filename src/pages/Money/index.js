import React, { useState, useEffect } from 'react';

import MainMenu from '../../Components/MainMenu';
import './styles.css';
import './responsivity.css';

export default function Money() {
  const [ transactions, setTransactions ] = useState([]);

  useEffect(() => {
    setTransactions([0, 1, 2, 3]);
  }, []);
  return (
    <div className='page money'>
      <MainMenu currentPage='money' />
      <div className='pageContent' >
        <header>
          <h1>Finanças</h1>
          <p>Hi Aaron, welcome back!</p>
        </header>

        <section className='balance'>
          <section className='totalBalance'>
            <span>Balanço nas últimas 24 horas</span>
            <h2> €40,000.00 </h2>
          </section>

          <section className='historic'>
            <span className='date'>Pedidos das últimas 24 horas</span>
            <div className='underLine' />
            
            {transactions.map(transaction => (
              <>
              <div className='transaction' key={transaction} >
                <div className='info'>
                  <p>Pedido #token</p>
                  <span>Pago online</span>
                </div>

                <p className='price'>realprice</p>
              </div>
              <div className='underLine' />
              </>
            ))}
            
          </section>
        </section>
      </div>
    </div>
  )
}
