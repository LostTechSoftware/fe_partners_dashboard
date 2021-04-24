import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  Select,
  MenuItem,
  Switch,
} from "@material-ui/core";

import api from "../../services/api";
import Upload from "../Upload";
import PriceInput from "../PriceInput";
import MainButton from "../MainButton";
import "./styles.css";

export default function ItemInfoForm({
  update,
  loading,
  submit,
  deleteItem,
  openModal,
  closeModal,

  title,
  price = 0,
  description,
  promotion,
  file,

  setTitle,
  setPrice,
  setDescription,
  setPromotion,
  handleUpload,

  setRowId,
  rowId,
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function LoadCategories() {
      const response = await api.get(`/menu/restaurant/get`);
      setCategories(
        response.data.rows.map((r) => ({
          title: r.title,
          _id: r._id,
        }))
      );
    }
    LoadCategories();
  }, []);

  return (
    <Dialog fullWidth maxWidth="xl" open={openModal} onClose={closeModal}>
      <form
        encType="multipart/form-data"
        className={`submitItem ${update ? "update" : null}`}
        onSubmit={loading ? (e) => e.preventDefault() : submit}
      >
        <Upload onUpload={handleUpload} file={file} />

        <section className="titleLine">
          <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          {!update && (
            <Select
              value={rowId}
              onChange={(event) => setRowId(event.target.value)}
            >
              {categories.map((category) => (
                <MenuItem style={{ fontSize: 20 }} value={category._id}>
                  {" "}
                  {category.title}{" "}
                </MenuItem>
              ))}
            </Select>
          )}
        </section>

        <section className="price">
          <PriceInput priceValue={price} setPriceValue={setPrice} />

          {update ? (
            <label className="promotion">
              <Switch
                checked={promotion}
                onChange={(event) => setPromotion(event.target.checked)}
              />
              <span>Preço Promocional</span>
            </label>
          ) : null}
        </section>

        <textarea
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <DialogActions>
          {update ? (
            <MainButton
              loading={loading === "delete"}
              boxId="deleteItem"
              onClick={deleteItem}
            >
              Apagar Produto
            </MainButton>
          ) : null}
          <MainButton loading={loading === "send"} type="submit">
            Enviar
          </MainButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}
