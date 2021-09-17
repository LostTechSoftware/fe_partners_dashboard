import React from "react";
import Template from "../Template";
import { Checkbox } from "@material-ui/core";
import {
  Container,
  InputCNPJ,
  InputRestaurant,
  LabelCNPJ,
  LabelRestaurant,
  LabelCheckbox,
  DivCheckbox,
  LabelNumber,
  InputNumber,
  LabelCPF,
  InputCPF,
  DivAlign,
  LabelCheckboxSMS,
} from "./styles";

export default function PartnerInfo() {
  return (
    <Template title="Fale um pouco sobre seu estabelecimento" progress="50">
      <Container>
        <DivAlign>
          <LabelCNPJ>CNPJ do estabelecimento</LabelCNPJ>
          <InputCNPJ placeholder="__.___.___/____-__" />

          <DivCheckbox>
            <Checkbox />
            <LabelCheckbox>Não tenho CNPJ</LabelCheckbox>
          </DivCheckbox>

          <LabelRestaurant>Nome do estabelecimento</LabelRestaurant>
          <InputRestaurant placeholder="Nome do estabelecimento" />

          <LabelNumber>Telefone do estabelecimento</LabelNumber>
          <InputNumber placeholder="(__) _____-____" />

          <LabelCPF>CPF do responsável</LabelCPF>
          <InputCPF placeholder="___.___.___-__" />

          <DivCheckbox>
            <Checkbox />
            <LabelCheckboxSMS>
              Ao continuar, concordo em receber SMS do FoodZilla
            </LabelCheckboxSMS>
          </DivCheckbox>
        </DivAlign>
      </Container>
    </Template>
  );
}
