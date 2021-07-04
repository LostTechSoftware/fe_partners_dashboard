import React from "react";
import Modal from "../../../Components/Modal";
import Checkbox from "@material-ui/core/Checkbox";

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

function AddAdditional({
  cancel,
  selectedAdditonal,
  uploadedFiles,
  setUploadedFile,
  rows,
}) {
  const [name, setName, price, setPrice] = useAddAdditinal({
    selectedAdditonal,
    uploadedFiles,
    setUploadedFile,
  });

  return (
    <Modal cancel={cancel} displayBottom title="Novo adicional">
      <Container>
        <DropZone
          uploadedFiles={uploadedFiles}
          setUploadedFile={setUploadedFile}
          avatar={selectedAdditonal.avatar}
        />

        <Input>
          <ContainerInput>
            <Label>Nome</Label>
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
            <Label>Categoria de adicionais</Label>
            <Selector value={rows[0]} full>
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
              <Checkbox value={!price} color="primary" />
            </ContainerCheckBox>

            <ContainerInput zeroMargin half>
              <Label>Preço</Label>
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
