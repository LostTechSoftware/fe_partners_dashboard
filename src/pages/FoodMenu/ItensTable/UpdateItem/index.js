import React, { useState, useEffect } from 'react';
import filesize from "filesize";

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

  const [ uploadedFile, setUploadedFile ] = useState({});
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
        avatar: uploadedFile,
      });
      console.log(`Item ${_id} shall be updated`);
    } catch (error) {
      console.log(error)
    }
  }

  function deleteItem() {
    try {
      const response = api.delete(`/delete/product/${_id}`)
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    setUploadedFile(uploadedFiles[0])
  };

  return (
    <ItemInfoForm
      update
      submit={updateItem}
      deleteItem={deleteItem}
      openModal={openModal}
      closeModal={closeModal}

      handleUpload={handleUpload}
      file={uploadedFile}
      
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
