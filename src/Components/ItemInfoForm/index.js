import React from 'react';
import {
  Switch,
  FormControlLabel,
  Dialog,
  DialogActions
} from '@material-ui/core';

import PriceInput from '../PriceInput';
import MainButton from '../MainButton'
import './styles.css';

export default function ItemInfoForm({
  update,
  submit,
  openModal,
  closeModal,

  title,
  price=0,
  description,
  promotion,
  
  setTitle,
  setPrice,
  setDescription,
  setPromotion,
}) {

  return (
    <Dialog
      fullWidth
      maxWidth='xl'
      open={ openModal }
      onClose={ closeModal }
    >
      <form className={`submitItem ${ update ? 'update' : null }`} onSubmit={ submit }>
        <input
          type='text'
          placeholder='Titulo'
          value={ title }
          onChange={ event => setTitle(event.target.value) }
        />

        <section className='price'>
          <PriceInput
            priceValue={ price }
            setPriceValue={ setPrice }
          />

          {
            update ?
              <label className='promotion'>
                <Switch
                  checked={promotion}
                  onChange={event => setPromotion(event.target.checked)}
                />
                <span>Preço Promocional</span>
              </label>
            : null
          }
        </section>

        <textarea
          type='text'
          placeholder='Descrição'
          value={ description }
          onChange={ event => setDescription(event.target.value) }
        />

        <DialogActions>
          {
            update ?
              <MainButton boxId='deleteItem'>
                Apagar Produto
              </MainButton>
            : null
          }
          <MainButton type='submit' >
            Enviar
          </MainButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}
