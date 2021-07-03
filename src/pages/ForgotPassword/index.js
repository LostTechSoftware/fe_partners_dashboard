import React from "react";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Button,
  ButtonText,
  Logo,
  DivAlign,
  ContainerInput,
  Label,
  InputName,
} from "./styles";

export default function forgotPassword() {
  return (
    <Container>
      <DivAlign>
        <Logo src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Logos/FoodZilla.svg"></Logo>
        <Label>Qual seu email ?</Label>
        <ContainerInput>
          <InputName></InputName>
        </ContainerInput>
        <Button>
          <ButtonText>Continuar</ButtonText>
        </Button>
      </DivAlign>
    </Container>
  );
}
