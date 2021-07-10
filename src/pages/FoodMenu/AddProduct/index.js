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
    setPrice,
    promotion,
    setPromotion,
    promotionalPrice,
    setPromotionalPrice,
    selectDay,
    daysActive,
    uploadedFiles,
    setUploadedFile,
    updateOrCreateItem,
    rowSelected,
    setRowSelected,
    loading,
    deleteProductAvatar,
    showDays,
    setShowDays,
    deleteItem,
  } = useAddProduct({ product, updateProductOnTable, reload, setReload, rows });

  return (
    <Modal
      cancel={cancel}
      onClick={updateOrCreateItem}
      displayBottom
      title="Adicionar produto"
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
            onChange={(event) => setName(event.target.value)}
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
              onChange={(event) => setRowSelected(event.target.value)}
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
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Ex: massa, queijo, tomate, presunto..."
          />
          <CaractersCount>{description.length}/100</CaractersCount>
        </ContainerInput>
      </Input>

      <Input>
        <ContainerInput>
          <Label>Preço *</Label>
          <InputPrice
            pattern="[0-9]*"
            data-politespace
            data-grouplength="2"
            data-delimiter=","
            data-reverse
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
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
                pattern="[0-9]*"
                data-politespace
                data-grouplength="2"
                data-delimiter=","
                data-reverse
                onChange={(event) => setPromotionalPrice(event.target.value)}
                value={promotionalPrice}
                type="number"
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
