import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import filesize from "filesize";
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

  const [ uploadedFile, setUploadedFile ] = useState({});

  function createItem(event) {
    event.preventDefault();
    alert('an item shall be created')
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
    <>
    <Fab onClick={ () => setOpenModal(true) } >
      <AddRounded />
    </Fab>

    <ItemInfoForm
      submit= { createItem }
      openModal={openModal}
      closeModal={() => setOpenModal(false)}

      handleUpload={handleUpload}
      file={uploadedFile}
      
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
