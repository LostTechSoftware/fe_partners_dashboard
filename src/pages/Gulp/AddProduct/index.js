import React from "react";

import {
  ContainerDropZone,
  Input,
  Label,
  InputName,
  CaractersCount,
  ContainerInput,
  Selector,
  TextArea,
  InputPrice,
  SubTitle,
  ContainerCheckBox,
  Separator,
  LabelCheckBox,
  GridDays,
  BoxDay,
  DayName,
  ContainerCenter,
} from "./styles";
import Modal from "../../../Components/Modal";
import Dropzone from "./DropZone";
import { useAddProduct } from "./hooks";
import { Option } from "../styles";
import "./checkbox.css";
import "./styles.css";

function AddProduct({
  cancel,
  product,
  updateProductOnTable,
  reload,
  setReload,
  rows,
}) {
  const {
    days,
    name,
    setName,
    description,
    setDescription,
    price,
    promotion,
    setPromotion,
    promotionalPrice,
    selectDay,
    daysActive,
    uploadedFiles,
    setUploadedFile,
    updateOrCreateItem,
    rowSelected,
    deleteProductAvatar,
    setRowSelected,
    loading,
    showDays,
    setShowDays,
    deleteItem,
    handlePriceChange,
    priceInputRef,
    handlePromotionalPriceChange,
    promotionalPriceInputRef,
  } = useAddProduct({ product, updateProductOnTable, reload, setReload, rows });

  return (
    <Modal
      cancel={cancel}
      onClick={updateOrCreateItem}
      displayBottom
      title={
        !!(product && product._id) ? "Editar produto" : "Adicionar produto"
      }
      buttonsDisabled={loading}
      showTrash={!!product}
      onClickTrash={deleteItem}
    >
      <ContainerDropZone>
        <Dropzone
          uploadedFiles={uploadedFiles}
          setUploadedFile={setUploadedFile}
          deleteProductAvatar={deleteProductAvatar}
          avatar={product.avatar}
        />
      </ContainerDropZone>
      <Input>
        <ContainerInput>
          <Label>Nome do produto *</Label>
          <InputName
            value={name}
            onChange={(event) => {
              setName(event.target.value.slice(0, 100));
            }}
            placeholder="Ex: Pizza de calabresa"
          />
          <CaractersCount>{name.length}/100</CaractersCount>
        </ContainerInput>
      </Input>
      <Input>
        <ContainerInput flex>
          <ContainerInput half>
            <Label>Tipo do produto</Label>
            <Selector />
          </ContainerInput>

          <ContainerInput half>
            <Label>Categoria *</Label>
            <Selector
              value={rowSelected}
              onChange={(event) => {
                setRowSelected(event.target.value);
              }}
            >
              {rows.map((row) => (
                <Option value={row._id}>{row.title}</Option>
              ))}
            </Selector>
          </ContainerInput>
        </ContainerInput>
      </Input>
      <Input>
        <ContainerInput>
          <Label>Igredientes *</Label>
          <TextArea
            value={description}
            onChange={(event) => {
              setDescription(event.target.value.slice(0, 100));
            }}
            placeholder="Ex: massa, queijo, tomate, presunto..."
          />
          <CaractersCount>{description.length}/100</CaractersCount>
        </ContainerInput>
      </Input>
      <Input>
        <ContainerInput>
          <Label>Preço *</Label>
          <InputPrice
            value={
              parseFloat(price) !== 0
                ? parseFloat(price).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "brl",
                  })
                : ""
            }
            ref={priceInputRef}
            onChange={handlePriceChange}
            placeholder="R$ 0,00"
          />
        </ContainerInput>
      </Input>
      <Separator>
        <SubTitle>Promoção</SubTitle>

        <ContainerCheckBox>
          <LabelCheckBox>{promotion ? "Ativada" : "Desativada"}</LabelCheckBox>
          <label className="container">
            {promotion ? (
              <input
                onChange={() => setPromotion(!promotion)}
                type="checkbox"
                defaultChecked="checked"
              />
            ) : (
              <input
                onChange={() => setPromotion(!promotion)}
                type="checkbox"
              />
            )}
            <span className="checkmark" />
          </label>
        </ContainerCheckBox>
      </Separator>
      {promotion && (
        <Input className="animationPromotion">
          <ContainerInput zeroMargin flex>
            <ContainerInput half>
              <Label>Preço promocional</Label>
              <InputName
                half
                value={
                  parseFloat(promotionalPrice) !== 0
                    ? parseFloat(promotionalPrice).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "brl",
                      })
                    : ""
                }
                ref={promotionalPriceInputRef}
                onChange={handlePromotionalPriceChange}
                placeholder="R$ 0,00"
              />
            </ContainerInput>

            <ContainerInput half>
              <Label>Duração</Label>
              <Selector />
            </ContainerInput>
          </ContainerInput>
        </Input>
      )}
      <Separator>
        <SubTitle>Agendar disponibilidade</SubTitle>

        <ContainerCheckBox>
          <LabelCheckBox>{promotion ? "Ativada" : "Desativada"}</LabelCheckBox>
          <label className="container">
            {showDays ? (
              <input
                onChange={() => setShowDays(!showDays)}
                type="checkbox"
                defaultChecked="checked"
              />
            ) : (
              <input onChange={() => setShowDays(!showDays)} type="checkbox" />
            )}
            <span className="checkmark" />
          </label>
        </ContainerCheckBox>
      </Separator>
      {showDays && (
        <GridDays className="animationPromotion">
          {days.map((day) => (
            <ContainerCenter onClick={() => selectDay(day, product)}>
              <BoxDay selected={daysActive[day].active}>
                <DayName selected={daysActive[day].active}>{day}</DayName>
              </BoxDay>
            </ContainerCenter>
          ))}
        </GridDays>
      )}
    </Modal>
  );
}

export default AddProduct;
