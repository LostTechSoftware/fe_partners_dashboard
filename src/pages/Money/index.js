import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';

import MainMenu from '../../Components/MainMenu';
import ButtonSubmit from '../../Components/ButtonSubmit';
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
          <div className='info'>
            <section className='totalBalance'>
              <span>Your Balance</span>
              <h2> €40,000.00 </h2>
            </section>

            <section className='historic'>
            </section>
          </div>

          <section className='withdraw' >
            <TextField
              id="standard-start-adornment"
              InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>,
              }}
            />

            <ButtonSubmit> withdraw </ButtonSubmit>
          </section>
        </section>
      </div>
    </div>
  )
}
