import React, { useState, useEffect } from "react";
import { toast } from "../../../Components/Toast";
import filesize from "filesize";

import api from "../../../../services/api";
import ItemInfoForm from "../../../../Components/ItemInfoForm";

export default function UpdateItemBox({
  product: { _id, title, price, description, avatar },
  openModal,
  closeModal,
  updateProductOnTable,
  removeProductFromTable,
}) {
  const [OldPrice, setOldPrice] = useState(price);
  const [editingTitle, setEditingTitle] = useState(title);
  const [editingPrice, setEditingPrice] = useState(price);
  const [editingDescription, setEditingDescription] = useState(description);

  const [uploadedFile, setUploadedFile] = useState(null);
  const [promotion, setPromotion] = useState(false);

  const [loading, setLoading] = useState("");

  useEffect(() => {
    setEditingTitle(title);
  }, [title]);

  useEffect(() => {
    setEditingPrice(price);
    setOldPrice(price);
  }, [price]);

  useEffect(() => {
    setEditingDescription(description);
  }, [description]);

  async function updateItem(event) {
    event.preventDefault();
    setLoading("send");
    try {
      const data = new FormData();

      data.append("title", editingTitle);
      data.append("price", parseFloat(editingPrice));
      data.append("description", editingDescription);
      data.append("promotion", promotion);
      data.append("OldPrice", OldPrice);

      if (uploadedFile) data.append("avatar", uploadedFile.file);

      await api.post(`/product/edit/${_id}`, data);
      updateProductOnTable({
        productId: _id,
        newTitle: editingTitle,
        newPrice: editingPrice,
      });
      toast.success("Produto salvo!");
    } catch (error) {
      toast.error("Erro ao salvar produto, tente novamente!");
    }
    setLoading("");
    closeModal();
  }

  async function deleteItem() {
    try {
      setLoading("delete");
      await api.delete(`/delete/product/${_id}`);
      removeProductFromTable(_id);
      toast.success("Produto deletado!");
    } catch (error) {
      toast.error("Erro ao deletar produto, tente novamente!");
    }
    setLoading("");
    closeModal();
  }

  const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      id: file.lastModified,
      file,
      name: file.name,
      readableSize: filesize(file.size),
      progress: 0,
      preview: URL.createObjectURL(file),
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFile(uploadedFiles[0]);
  };

  return (
    <>
      <ItemInfoForm
        update
        loading={loading}
        submit={updateItem}
        deleteItem={deleteItem}
        openModal={openModal}
        closeModal={closeModal}
        title={editingTitle}
        price={editingPrice}
        description={editingDescription}
        promotion={promotion}
        file={uploadedFile}
        setTitle={setEditingTitle}
        setPrice={setEditingPrice}
        setDescription={setEditingDescription}
        setPromotion={setPromotion}
        handleUpload={handleUpload}
      />
    </>
  );
}
