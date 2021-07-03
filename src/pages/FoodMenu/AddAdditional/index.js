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

function AddAdditional({ cancel }) {
  return (
    <Modal cancel={cancel} displayBottom title="Novo adicional">
      <Container>
        <DropZone />

        <Input>
          <ContainerInput>
            <Label>Nome</Label>
            <InputName placeholder="Queijo parmesão" />
            <CaractersCount>0/20</CaractersCount>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Categoria de adicionais</Label>
            <Selector full />
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput flex>
            <ContainerCheckBox>
              <LabelCheckBox>Gratuito</LabelCheckBox>
              <Checkbox color="primary" />
            </ContainerCheckBox>

            <ContainerInput zeroMargin half>
              <Label>Preço</Label>
              <InputName half type="number" placeholder="R$ 0,00" />
            </ContainerInput>
          </ContainerInput>
        </Input>
      </Container>
    </Modal>
  );
}

export default AddAdditional;
