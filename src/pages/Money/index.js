import React from 'react';

import MainMenu from '../../Components/MainMenu';
import './styles.css'

export default function Money() {
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
            <span>Your Balance</span>
            <h2> €40,000.00 </h2>
          </section>

          <section className='historic'>
            <span className='date'>Today | 22/JAN/2020</span>
            <div className='underLine' />
            
            <div className='transaction'>
              <div className='info'>
                <p>Transfer to Zomato</p>
                <p>Online food order</p>
              </div>

              <p className='price'>R$100,50</p>
            </div>

            <div className='transaction'>
              <div className='info'>
                <p>Transfer to Zomato</p>
                <p>Online food order</p>
              </div>

              <p className='price'>R$100,50</p>
            </div>

            <div className='transaction'>
              <div className='info'>
                <p>Transfer to Zomato</p>
                <p>Online food order</p>
              </div>

              <p className='price'>R$100,50</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}
