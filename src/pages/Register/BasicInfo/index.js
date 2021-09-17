import React from "react";
import Template from "../Template";
import { Checkbox } from "@material-ui/core";

import {
  InputName,
  LabelName,
  LabelNumber,
  InputNumber,
  LabelEmail,
  InputEmail,
  LabelPassword,
  InputPassword,
  Container,
  LabelCheckbox,
  DivCheckbox,
  DivAlign,
} from "./styles";

export default function BasicInfo() {
  return (
    <Template title="Primeiro, nos informe sobre você" progress="50">
      <Container>
        <DivAlign>
          <LabelName>Nome completo do responsável</LabelName>
          <InputName placeholder="Nome" />

          <LabelNumber>Telefone</LabelNumber>
          <InputNumber placeholder="(__) _____-____" />

          <LabelEmail>Email do responsável</LabelEmail>
          <InputEmail placeholder="email@exemplo.com" />

          <LabelPassword>Senha</LabelPassword>
          <InputPassword type="password" placeholder="Senha" />

          <DivCheckbox>
            <Checkbox />
            <LabelCheckbox>
              Ao continuar, concordo em receber emails do FoodZilla
            </LabelCheckbox>
          </DivCheckbox>
        </DivAlign>
      </Container>
    </Template>
  );
}
