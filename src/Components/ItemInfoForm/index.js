import React from 'react';
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
  description,
  setTitle,
  setPrice,
  setDescription,
}) {

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
          value={ title }
          onChange={ event => setTitle(event.target.value) }
        />

        <PriceInput
          priceValue={ price }
          setPriceValue={ setPrice }
        />

        <textarea
          type='text'
          placeholder='Descrição'
          value={ description }
          onChange={ event => setDescription(event.target.value) }
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
