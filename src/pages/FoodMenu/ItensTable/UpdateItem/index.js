import React, { useState, useEffect } from 'react';

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
  const [ editingTitle, setEditingTitle ] = useState(title);
  const [ editingPrice, setEditingPrice ] = useState(price);
  const [ editingDescription, setEditingDescription ] = useState(description);

  useEffect(() => {
    setEditingTitle(title)
  },[ title ]);

  useEffect(() => {
    setEditingPrice(price)
  },[ price ]);

  useEffect(() => {
    setEditingDescription(description)
  },[ description ]);

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
      
      title={editingTitle}
      price={editingPrice}
      description={editingDescription}
      
      setTitle={setEditingTitle}
      setPrice={setEditingPrice}
      setDescription={setEditingDescription}
    />
  );
}
