import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions } from '@material-ui/core';

import PriceInput from '../PriceInput';
import MainButton from '../MainButton'
import './styles.css';

export default function ItemInfoForm({
  submit,
  openModal,
  closeModal,
  title,
  price=0,
  description
}) {
  const [ editingTitle, setEditingTitle ] = useState('');
  const [ editingPrice, setEditingPrice ] = useState(0);
  const [ editingDescription, setEditingDescription ] = useState('');

  useEffect(() => {
    setEditingTitle(title)
  }, [ title ]);

  useEffect(() => {
    setEditingPrice(price)
  }, [ price ]);

  useEffect(() => {
    setEditingDescription(description)
  }, [ description ]);

  return (
    <Dialog
      fullWidth
      maxWidth='xl'
      open={ openModal }
      onClose={ closeModal }
    >
      <form className='updateItem' onSubmit={ submit }>
        <input
          type='text'
          placeholder='Titulo'
          value={ editingTitle }
          onChange={ event => setEditingTitle(event.target.value) }
        />

        <PriceInput
          priceValue={editingPrice}
          setPriceValue={setEditingPrice}
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
    </Dialog>
  );
}
