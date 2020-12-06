import React, { useEffect, useState } from 'react';
import {
  SearchRounded,
} from '@material-ui/icons';

import api from '../../services/api'
import MainMenu from '../../Components/MainMenu';
import ItensTable from './ItensTable';
import CreateItem from './CreateItem';
import './styles.css';

export default function FoodMenu() {
  const [ expectedItensName, setExpectedItensName ] = useState('');
  const [ itensList, setItensList ] = useState([]);

  useEffect(() => {
    async function getItens() {
        const restaurantId = sessionStorage.getItem('_id');
        if( !expectedItensName ) {
          const response = await api.get(`/menu/${ restaurantId }`);

          setItensList(response.data);
        } else {
          const response = await api.get(`/search/${ expectedItensName }`);

          setItensList(response.data);
        }
    }

    getItens();
  }, [expectedItensName]);

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
            value={expectedItensName}
            onChange={event => setExpectedItensName(event.target.value)}
          />
        </section>

        <section className='itensList'>
          {itensList.rows ? itensList.rows.map( row => (
            <ItensTable
              key={row._id}
              id={row._id}
              title={row.title}
            />
          )) 
          : <ItensTable
              key={1}
              id={1}
              title={expectedItensName}
              products={itensList}
            />
        }
        </section>
      </div>
      
      <CreateItem />
    </div>
  );
}
