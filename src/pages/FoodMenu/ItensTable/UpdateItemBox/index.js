import React, { useState, useRef, useEffect } from 'react';
import { DialogActions } from '@material-ui/core';

import MainButton from '../../../../Components/MainButton'
import api from '../../../../services/api';
import './styles.css';

export default function UpdateItemBox({ children: { _id, title, price, description } }) {
  const [ editingTitle, setEditingTitle ] = useState(title);
  const [ editingPrice, setEditingPrice ] = useState(price);
  const [ editingDescription, setEditingDescription ] = useState(description);
  const [ priceInputPosition, setPriceInputPosition] = useState(0);
  const priceInputRef = useRef(null);

  function updateItem(event) {
    // const response = api.post('/', {
    // });
    event.preventDefault();
    console.log('updateItens');
    console.log({title, price, description})
  }

  function handlePriceChange(event) {
    const position = event.target.selectionStart;
    
    // define for wrong cursor position when (value >= 100) 
    if(position > 2)
      setPriceInputPosition(position);
    else
      setPriceInputPosition(4);

    let formatedPrice = event.target.value;
    // Remove separação de centena e troca ',' por '.'
    formatedPrice = formatedPrice.replace(/\./g, '');
    formatedPrice = formatedPrice.replace(/,/g, '.');

    if(formatedPrice.length === 1)
      console.log('arrumar bug aq');

    // keep only numbers and 1 dot
    formatedPrice = formatedPrice.replace(/[^0-9\.]|\.(?=\.)/g, '');

    // erase a zero when finds 3 number for cents
    formatedPrice = formatedPrice.replace(/0(?=([1-9]{0,2})$)/g, '');

    // add a dot before last two number with no dot finded 
    const dotNotfinded = formatedPrice.indexOf('.') === -1;
    if(dotNotfinded) {
      let arrayPrice = formatedPrice.split('');
      arrayPrice.push(arrayPrice[arrayPrice.length - 1]);
      arrayPrice[arrayPrice.length - 2] = arrayPrice[arrayPrice.length - 3];
      arrayPrice[arrayPrice.length - 3] = '.';
      formatedPrice = arrayPrice.join('');
    }
    
    if(formatedPrice)
      setEditingPrice(formatedPrice);
    else
      setEditingPrice(0);
  }

  useEffect(() => {
    priceInputRef.current.selectionStart = priceInputPosition;
    priceInputRef.current.selectionEnd = priceInputPosition;
  }, [ priceInputPosition ])

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
        ref={ priceInputRef }
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
