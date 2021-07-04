import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

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
  } = useAddProduct({ product, updateProductOnTable, reload, setReload, rows });

  return (
    <Modal
      cancel={cancel}
      onClick={updateOrCreateItem}
      displayBottom
      title="Adicionar produto"
      buttonsDisabled={loading}
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
          <Checkbox
            onChange={(event) => setPromotion(event.target.value)}
            color="primary"
          />
        </ContainerCheckBox>
      </Separator>

      <Input>
        <ContainerInput flex>
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

      <GridDays>
        {days.map((day) => (
          <ContainerCenter onClick={() => selectDay(day, product)}>
            <BoxDay selected={daysActive[day].active}>
              <DayName selected={daysActive[day].active}>{day}</DayName>
            </BoxDay>
          </ContainerCenter>
        ))}
      </GridDays>
    </Modal>
  );
}

export default AddProduct;
