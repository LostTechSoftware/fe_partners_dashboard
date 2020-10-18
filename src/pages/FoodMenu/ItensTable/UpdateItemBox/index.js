import React, { useState } from 'react';
import { DialogActions } from '@material-ui/core';

import MainButton from '../../../../Components/MainButton'
import api from '../../../../services/api';
import './styles.css';

export default function UpdateItemBox({ productId }) {
  const [ title, setTitle ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ description, setDescription ] = useState('');

  function updateItem() {
    // const response = api.post('/', {
    // });
    console.log('updateItens');
  }

  return (
    <div className='updateItem'>
      <input
        type='text'
        placeholder='Titulo'
        value={ title }
        onChange={ event => setTitle(event.target.value) }
      />

      <input
        type='text'
        placeholder='preço'
        value={ price }
        onChange={ event => setPrice(event.target.value) }
      />

      <textarea
        type='text'
        placeholder='Descrição'
        value={ description }
        onChange={ event => setDescription(event.target.value) }
      />

      <DialogActions>
        <MainButton onClick={ updateItem }>
          Enviar
        </MainButton>
      </DialogActions>
    </div>
  );
}
