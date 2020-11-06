import React, { useState } from 'react';
import { DialogActions } from '@material-ui/core';

import MainButton from '../../../../Components/MainButton'
import api from '../../../../services/api';
import './styles.css';
// 
export default function UpdateItemBox({ children: { _id, title, price, description } }) {
  const [ editingTitle, setEditingTitle ] = useState(title);
  const [ editingPrice, setEditingPrice ] = useState(price);
  const [ editingDescription, setEditingDescription ] = useState(description);

  function updateItem() {
    // const response = api.post('/', {
    // });
    console.log('updateItens');
    console.log({title, price, description})
  }

  function handlePriceChange(event) {
    let notFormatedPrice = event.target.value;
    // Troca ',' por '.'
    notFormatedPrice.replace(/,/g, '.');
    // Mantem apenas numeros e um ponto
    notFormatedPrice = notFormatedPrice.replace(/[^1-9\.]|\.(?=\.)/g, '');
    
    console.log(notFormatedPrice);
    if(notFormatedPrice)
      setEditingPrice(notFormatedPrice);
    else
      setEditingPrice('0.00');
  }

  return (
    <div className='updateItem'>
      <input
        type='text'
        placeholder='Titulo'
        value={ editingTitle }
        onChange={ event => setEditingTitle(event.target.value) }
      />

      <input
        type='text'
        placeholder='preço'
        value={ 
          parseFloat(editingPrice).toLocaleString(
            'pt-br',
            {style:'currency', currency:'brl'}
          )
        }
        onChange={ handlePriceChange }
      />

      <textarea
        type='text'
        placeholder='Descrição'
        value={ editingDescription }
        onChange={ event => setEditingDescription(event.target.value) }
      />

      <DialogActions>
        <MainButton onClick={ updateItem }>
          Enviar
        </MainButton>
      </DialogActions>
    </div>
  );
}
