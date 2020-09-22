import React from 'react';

import MainMenu from '../../Components/MainMenu';
import './styles.css'

export default function Money() {
  return (
    <div className='page money'>
      <MainMenu currentPage='money' />
      <h1>Money Screen</h1>
    </div>
  )
}
