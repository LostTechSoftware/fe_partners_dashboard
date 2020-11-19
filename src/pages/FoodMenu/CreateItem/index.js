import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import { toast } from 'react-toastify';
import filesize from "filesize";

import {
  AddRounded,
} from '@material-ui/icons';
import 'react-toastify/dist/ReactToastify.css'

import api from '../../../services/api';
import ItemInfoForm from '../../../Components/ItemInfoForm';
import './styles.css';

export default function CreateItem() {
  const [ openModal, setOpenModal ] = useState(false);

  const [ editingTitle, setEditingTitle ] = useState('');
  const [ editingPrice, setEditingPrice ] = useState(0);
  const [ editingDescription, setEditingDescription ] = useState('');

  const [ loading, setLoading ] = useState('')
  const [ uploadedFile, setUploadedFile ] = useState(null);

  const [ rowId, setRowId ] = useState('')
  
  async function createItem(event) {
    event.preventDefault();
    setLoading('send');
    try {
      const data = new FormData()

      data.append('title', editingTitle)
      data.append('price', parseFloat(editingPrice))
      data.append('description', editingDescription)
      if(uploadedFile.file)
        data.append('avatar', uploadedFile.file);
      
      await api.post(`/add/product/${rowId}`)
      toast.success('Produto salvo!');
    } catch (error) {
      console.log(error);
      toast.error('Erro ao salvar produto, tente novamente!');
    }
    setLoading('');
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
      loading={loading}
      submit= { createItem }
      openModal={openModal}
      closeModal={() => setOpenModal(false)}
      
      title={editingTitle}
      price={editingPrice}
      description={editingDescription}
      file={uploadedFile}
      setRowId={setRowId}
      rowId={rowId}

      setTitle={setEditingTitle}
      setPrice={setEditingPrice}
      setDescription={setEditingDescription}
      handleUpload={handleUpload}
    />
    </>
  )
}
