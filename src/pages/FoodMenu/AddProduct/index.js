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

function AddProduct({ cancel }) {
  const [days] = useAddProduct();

  return (
    <Modal cancel={cancel} displayBottom title="Adicionar produto">
      <ContainerDropZone>
        <Dropzone />
      </ContainerDropZone>

      <Input>
        <ContainerInput>
          <Label>Nome do produto</Label>
          <InputName placeholder="Ex: Pizza de calabresa" />
          <CaractersCount>0/100</CaractersCount>
        </ContainerInput>
      </Input>

      <Input>
        <ContainerInput flex>
          <ContainerInput half>
            <Label>Tipo do produto</Label>
            <Selector />
          </ContainerInput>

          <ContainerInput half>
            <Label>Categoria</Label>
            <Selector />
          </ContainerInput>
        </ContainerInput>
      </Input>

      <Input>
        <ContainerInput>
          <Label>Igredientes</Label>
          <TextArea placeholder="Ex: massa, queijo, tomate, presunto..." />
          <CaractersCount>0/100</CaractersCount>
        </ContainerInput>
      </Input>

      <Input>
        <ContainerInput>
          <Label>Preço</Label>
          <InputPrice type="number" placeholder="R$ 0,00" />
        </ContainerInput>
      </Input>

      <Separator>
        <SubTitle>Promoção</SubTitle>

        <ContainerCheckBox>
          <LabelCheckBox>Ativada</LabelCheckBox>
          <Checkbox color="primary" />
        </ContainerCheckBox>
      </Separator>

      <Input>
        <ContainerInput flex>
          <ContainerInput half>
            <Label>Preço promocional</Label>
            <InputName half type="number" placeholder="R$ 0,00" />
          </ContainerInput>

          <ContainerInput half>
            <Label>Duração</Label>
            <Selector />
          </ContainerInput>
        </ContainerInput>
      </Input>

      <GridDays>
        {days.map((day) => (
          <ContainerCenter>
            <BoxDay selected={day === "segunda" || day === "quarta"}>
              <DayName selected={day === "segunda" || day === "quarta"}>
                {day}
              </DayName>
            </BoxDay>
          </ContainerCenter>
        ))}
      </GridDays>
    </Modal>
  );
}

export default AddProduct;
