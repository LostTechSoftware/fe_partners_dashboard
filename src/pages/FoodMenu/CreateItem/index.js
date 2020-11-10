import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import {
  AddRounded,
} from '@material-ui/icons';

import ItemInfoForm from '../../../Components/ItemInfoForm';
import './styles.css';

export default function CreateItem() {
  const [ openModal, setOpenModal ] = useState(false);

  const [ editingTitle, setEditingTitle ] = useState('');
  const [ editingPrice, setEditingPrice ] = useState(0);
  const [ editingDescription, setEditingDescription ] = useState('');

  function createItem(event) {
    event.preventDefault();
    alert('an item shall be created')
  }

  return (
    <>
    <Fab onClick={ () => setOpenModal(true) } >
      <AddRounded />
    </Fab>

    <ItemInfoForm
      submit= { createItem }
      openModal={openModal}
      closeModal={() => setOpenModal(false)}
      
      title={editingTitle}
      price={editingPrice}
      description={editingDescription}
      
      setTitle={setEditingTitle}
      setPrice={setEditingPrice}
      setDescription={setEditingDescription}
    />
    </>
  )
}
