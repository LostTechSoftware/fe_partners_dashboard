import React, { useState } from 'react';
import { DialogActions } from '@material-ui/core';

import MainButton from '../../../../Components/MainButton'
import api from '../../../../services/api';
import './styles.css';

export default function UpdateItemBox({ children: { _id, title, price, description } }) {
  const [ editingTitle, setEditingTitle ] = useState(title);
  const [ editingPrice, setEditingPrice ] = useState(price);
  const [ editingDescription, setEditingDescription ] = useState(description);

  function updateItem(event) {
    // const response = api.post('/', {
    // });
    event.preventDefault();
    console.log('updateItens');
    console.log({title, price, description})
  }

  function handlePriceChange(event) {
    console.log('inicial value:')
    console.log(event.target.value);
    let formatedPrice = event.target.value;
    // Remove separação de centena e troca ',' por '.'
    formatedPrice = formatedPrice.replace(/\./g, '');
    formatedPrice = formatedPrice.replace(/,/g, '.');

    if(formatedPrice.length === 1)
      console.log('arrumar bug aq');

    // Mantem apenas numeros e um ponto
    formatedPrice = formatedPrice.replace(/[^0-9\.]|\.(?=\.)/g, '');

    // Apaga zeros depois do ponto quando tiver um terceiro numero depois depois da virgula
    formatedPrice = formatedPrice.replace(/0(?=([1-9]{0,2})$)/g, '');

    // Adiciona '.' com dois numeros no fim sempre que n tiver '.'
    const dotNotfinded = formatedPrice.indexOf('.') === -1;
    if(dotNotfinded) {
      let arrayPrice = formatedPrice.split('');

      arrayPrice.push(arrayPrice[arrayPrice.length - 1]);
      arrayPrice[arrayPrice.length - 2] = arrayPrice[arrayPrice.length - 3];
      arrayPrice[arrayPrice.length - 3] = '.';

      formatedPrice = arrayPrice.join('');
    }

    console.log('final format:')
    console.log(formatedPrice);
    
    if(formatedPrice)
      setEditingPrice(formatedPrice);
  }

  return (
    <form className='updateItem' onSubmit={ updateItem }>
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
          parseFloat(editingPrice) !== 0 ?
            parseFloat(editingPrice).toLocaleString(
              'pt-br',
              {style:'currency', currency:'brl'}
            )
          : ''
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
        <MainButton type='submit' >
          Enviar
        </MainButton>
      </DialogActions>
    </form>
  );
}
