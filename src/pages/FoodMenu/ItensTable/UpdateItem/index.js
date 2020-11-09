import React from 'react';

import api from '../../../../services/api';
import ItemInfoForm from '../../../../Components/ItemInfoForm';

export default function UpdateItemBox({
  product: {
    _id,
    title,
    price,
    description
  },
  openModal,
  closeModal
}) {
  function updateItem(event) {
    // const response = api.post('/', {
    // });
    event.preventDefault();
    console.log('updateItens');
    console.log({title, price, description})
  }

  return (
    <ItemInfoForm
      submit={updateItem}
      openModal={openModal}
      closeModal={closeModal}
      title={title}
      price={price}
      description={description}
    />
  );
}
