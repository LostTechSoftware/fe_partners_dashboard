import React, { useEffect } from 'react';
import {
  Switch,
  Dialog,
  DialogActions
} from '@material-ui/core';

import Upload from '../Upload';
import PriceInput from '../PriceInput';
import MainButton from '../MainButton'
import './styles.css';

export default function ItemInfoForm({
  update,
  submit,
  deleteItem,
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

  handleUpload,
  file,

  loading
}) {
  useEffect(() => {
    console.log({loadidfsadsfa:loading})
  }, [loading])
  return (
    <Dialog
      fullWidth
      maxWidth='xl'
      open={ openModal }
      onClose={ closeModal }
    >
      <form encType="multipart/form-data" className={`submitItem ${ update ? 'update' : null }`} onSubmit={ submit }>
        <Upload
          onUpload={handleUpload}
          file={file}
        />
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
              <MainButton loading={loading === 'delete'} boxId='deleteItem' onClick={deleteItem}>
                Apagar Produto
              </MainButton>
            : null
          }
          <MainButton loading={loading === 'send'} type='submit' >
            Enviar
          </MainButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}
