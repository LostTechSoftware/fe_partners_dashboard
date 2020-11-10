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
    event.preventDefault();

    try {
      const response = api.post(`/product/edit/${_id}`, {
        title,
        price,
        description,
        // bool promotion
        // number OldPrice
        // img avatar
      });
      console.log(`Item ${_id} shall be updated`);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ItemInfoForm
      update
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
