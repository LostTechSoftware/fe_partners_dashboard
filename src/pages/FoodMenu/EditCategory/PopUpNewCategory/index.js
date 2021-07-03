import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

import {
  InputContainer,
  ContainerEdit,
  ContainerFlex,
  LabelEdit,
  MinorInput,
  Title,
} from "../../styles";
import PopUp from "../../../../Components/PopUp";
import {
  ContainerInput,
  Label,
  InputName,
  CaractersCount,
} from "../../AddProduct/styles";

function PopUpNewCategory() {
  return (
    <PopUp show={true}>
      <InputContainer>
        <ContainerInput>
          <Label>Nome</Label>
          <InputName placeholder="Ex: Massa" />
          <CaractersCount>0/20</CaractersCount>
        </ContainerInput>
      </InputContainer>

      <Title>Características</Title>

      <ContainerEdit>
        <ContainerFlex>
          <LabelEdit>Obrigatório</LabelEdit>
          <Checkbox color="primary" />
        </ContainerFlex>

        <ContainerFlex>
          <LabelEdit>Maxímo</LabelEdit>
          <MinorInput type="number" value={0} />
        </ContainerFlex>
      </ContainerEdit>
    </PopUp>
  );
}

export default PopUpNewCategory;
