import React from "react";
import Modal from "../../../Components/Modal";

import { Container } from "./styles";
import {
  Input,
  Label,
  CaractersCount,
  InputName,
  ContainerInput,
  Selector,
  ContainerCheckBox,
  LabelCheckBox,
} from "../AddProduct/styles";
import DropZone from "../AddProduct/DropZone";
import { useAddAdditinal } from "./hooks";
import { Option } from "../styles";
import "./checkbox.css";

function AddAdditional({
  cancel,
  selectedAdditonal,
  uploadedFiles,
  setUploadedFile,
  rows,
  selectedRows,
}) {
  const [
    name,
    setName,
    price,
    setPrice,
    updateOrCreateItem,
    loading,
    rowId,
    setRowId,
  ] = useAddAdditinal({
    selectedAdditonal,
    uploadedFiles,
    setUploadedFile,
    selectedRows,
    rows,
  });

  return (
    <Modal
      cancel={cancel}
      onClick={updateOrCreateItem}
      buttonsDisabled={loading}
      displayBottom
      title="Novo adicional"
    >
      <Container>
        <DropZone
          uploadedFiles={uploadedFiles}
          setUploadedFile={setUploadedFile}
          avatar={selectedAdditonal.avatar}
        />

        <Input>
          <ContainerInput>
            <Label>Nome *</Label>
            <InputName
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Queijo parmesão"
            />
            <CaractersCount>{name.length}/20</CaractersCount>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Categoria de adicionais *</Label>
            <Selector
              onChange={(event) => setRowId(event.target.value)}
              value={rowId}
              full
            >
              {rows.map((row) => (
                <Option value={row._id}>{row.title}</Option>
              ))}
            </Selector>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput flex>
            <ContainerCheckBox>
              <LabelCheckBox>Gratuito</LabelCheckBox>
              <label className="container">
                {!price ? (
                  <input
                    onChange={() => setPrice(0)}
                    type="checkbox"
                    defaultChecked="checked"
                  />
                ) : (
                  <input onChange={() => setPrice(0)} type="checkbox" />
                )}
                <span className="checkmark" />
              </label>
            </ContainerCheckBox>

            <ContainerInput zeroMargin half>
              <Label>Preço *</Label>
              <InputName
                half
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                type="number"
                placeholder="R$ 0,00"
              />
            </ContainerInput>
          </ContainerInput>
        </Input>
      </Container>
    </Modal>
  );
}

export default AddAdditional;
