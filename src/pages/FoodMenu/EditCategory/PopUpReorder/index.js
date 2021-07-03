import React from "react";
import { Plus } from "react-feather";

import PopUp from "../../../../Components/PopUp";
import DNDComponent from "../../../../Components/DNDComponent";

import { ContainerButton, Text, Button } from "./styles";

function PopUpReorder() {
  return (
    <PopUp show={true} oneButton buttonLabel="Salvar alterações">
      <DNDComponent>
        <ContainerButton>
          <Button>
            <Plus size={60} />
            <Text>Adicionar categoria</Text>
          </Button>
        </ContainerButton>
      </DNDComponent>
    </PopUp>
  );
}

export default PopUpReorder;
