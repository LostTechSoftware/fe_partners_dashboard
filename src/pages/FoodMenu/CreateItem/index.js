import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import {
  AddRounded,
} from '@material-ui/icons';

import ItemInfoForm from '../../../Components/ItemInfoForm';
import './styles.css';

export default function CreateItem() {
  const [ openModal, setOpenModal ] = useState(false);

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
      title={'title'}
      price={'price'}
      description={'description'}
    />
    </>
  )
}
