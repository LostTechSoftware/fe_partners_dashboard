import React, { useEffect, useState } from 'react';
import {
  SearchRounded,
} from '@material-ui/icons';


import api from '../../services/api'
import MainMenu from '../../Components/MainMenu';
import ItensTable from './ItensTable';
import './styles.css';

export default function FoodMenu() {
  const [ expectedItemName, setExpectedItemName ] = useState('');
  const [ itensList, setItensList ] = useState([]);

  useEffect(() => {
    async function getItens() {
      const response = await api.get('/menu/5f6af2b3df273108f45e8998')

      // console.log(response.data)
      setItensList(response.data.products)
    }

    getItens();
  }, [expectedItemName]);
  
  // "products": [
  //   {
  //     "paused": false,
  //     "favorite": [],
  //     "promotion": false,
  //     "_id": "5f6af4153cbc2b274499f977",
  //     "classd": "Pastél",
  //     "title": "Abobrinha",
  //     "description": "",
  //     "price": 6,
  //     "city": "Aguaí",
  //     "restaurant": "5f6af2b3df273108f45e8998",
  //     "additional": [],
  //     "__v": 0
  //   },
  // ]

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
