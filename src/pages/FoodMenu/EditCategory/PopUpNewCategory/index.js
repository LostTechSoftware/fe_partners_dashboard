import React from "react";

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
import { useNewCategory } from "./hooks";
import "./checkbox.css";

function PopUpNewCategory({
  show,
  close,
  selectedRowAdditional,
  setAdditionals,
  additionals,
  index,
  setReload,
  selectedRows,
}) {
  const [
    name,
    setName,
    mandatory,
    setMandatory,
    max,
    setMax,
    updateOrCreateItem,
    loading,
  ] = useNewCategory({
    selectedRowAdditional,
    setAdditionals,
    additionals,
    index,
    setReload,
    selectedRows,
  });

  return (
    <PopUp
      buttonsDisabled={loading}
      close={close}
      show={show}
      onClick={updateOrCreateItem}
    >
      <InputContainer>
        <ContainerInput>
          <Label>Nome</Label>
          <InputName
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ex: Massa"
          />
          <CaractersCount>{name.length}/20</CaractersCount>
        </ContainerInput>
      </InputContainer>

      <Title>Características</Title>

      <ContainerEdit>
        <ContainerFlex>
          <LabelEdit>Obrigatório</LabelEdit>
          <label className="container">
            {mandatory ? (
              <input
                onChange={() => setMandatory(!mandatory)}
                type="checkbox"
                defaultChecked="checked"
              />
            ) : (
              <input
                onChange={() => setMandatory(!mandatory)}
                type="checkbox"
                defaultChecked="checked"
              />
            )}
            <span className="checkmark" />
          </label>
        </ContainerFlex>

        <ContainerFlex>
          <LabelEdit>Maxímo</LabelEdit>
          <MinorInput
            value={max}
            onChange={(event) => setMax(event.target.value)}
            type="number"
          />
        </ContainerFlex>
      </ContainerEdit>
    </PopUp>
  );
}

export default PopUpNewCategory;
