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
  const OldPrice = price;
  const [ editingTitle, setEditingTitle ] = useState(title);
  const [ editingPrice, setEditingPrice ] = useState(price);
  const [ editingDescription, setEditingDescription ] = useState(description);

  const [ promotion, setPromotion ] = useState(true);

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
        title: editingTitle,
        price: parseFloat(editingPrice),
        description: editingDescription,
        promotion,
        OldPrice,
        // img avatar
      });
      console.log(`Item ${_id} shall be updated`);
    } catch (error) {
      console.log(error)
    }
    console.log('oldPrice');
    console.log(editingPrice);
  }

  function deleteItem() {
    try {
      const response = api.delete(`/delete/product/${_id}`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ItemInfoForm
      update
      submit={updateItem}
      deleteItem={deleteItem}
      openModal={openModal}
      closeModal={closeModal}
      
      title={editingTitle}
      price={editingPrice}
      description={editingDescription}
      promotion={promotion}
      
      setTitle={setEditingTitle}
      setPrice={setEditingPrice}
      setDescription={setEditingDescription}
      setPromotion={setPromotion}
    />
  );
}
