import React, { useEffect, useState } from 'react';

import {
  SearchRounded,
} from '@material-ui/icons';

import MainMenu from '../../Components/MainMenu';
import ItensTable from './ItensTable';
import './styles.css';

export default function FoodMenu() {
  const [ expectedItemName, setExpectedItemName ] = useState('');
  const [ itensList, setItensList ] = useState([]);

  useEffect(() => {
    setItensList([1, 2, 3, 4, 5, 6])
  }, [expectedItemName]);

  return (
    <div className='page foodMenu'>
      <MainMenu currentPage='foodMenu' />
      <div className='pageContent'>
        <h1>Cardápio</h1>
        <p className='delayWarning'>
          As alterações de disponibilidade dos itens podem levar até 5
           minutos para refletir no aplicativo dos seus consumidores
        </p>
        <section className='searchBox'>
          <label htmlFor='expectedItemName'>
            <SearchRounded/>
          </label>
          <input
            id='expectedItemName'
            placeholder='Buscar item do cardápio'
            value={expectedItemName}
            onChange={event => setExpectedItemName(event.target.value)}
          />
        </section>

        <section className='itensList'>
          {itensList.map(() => (
            <ItensTable />
          ))}
        </section>
      </div>
    </div>
  );
}
