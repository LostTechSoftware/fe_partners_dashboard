import React from "react";
import Template from "../Template";
import { Checkbox } from "@material-ui/core";

import {
  Container,
  DivAlign,
  LabelCheckbox,
  DivCheckbox,
  TextTop,
  InputProduct,
  ProductAddButton,
  ProductAddText,
} from "./styles";

export default function ProductsType() {
  return (
    <Template title="Que produtos seu estabelecimento vende ?" progress="50">
      <Container>
        <DivAlign>
          <TextTop>Tipos de comida que seu estabelecimento vende</TextTop>
          <DivCheckbox>
            <Checkbox />
            <LabelCheckbox>Lanches</LabelCheckbox>
          </DivCheckbox>

          <DivCheckbox>
            <Checkbox />
            <LabelCheckbox>Pizzas</LabelCheckbox>
          </DivCheckbox>

          <DivCheckbox>
            <Checkbox />
            <LabelCheckbox>Almoço</LabelCheckbox>
          </DivCheckbox>

          <DivCheckbox>
            <Checkbox />
            <LabelCheckbox>Doces</LabelCheckbox>
          </DivCheckbox>

          <DivCheckbox>
            <Checkbox />
            <LabelCheckbox>Salgados</LabelCheckbox>
          </DivCheckbox>

          <DivCheckbox>
            <Checkbox />
            <LabelCheckbox>Pastéis</LabelCheckbox>
          </DivCheckbox>

          <DivCheckbox>
            <Checkbox />
            <LabelCheckbox>Espetos</LabelCheckbox>
          </DivCheckbox>

          <InputProduct placeholder="Novo tipo de produto" />

          <ProductAddButton>
            <ProductAddText>+ Adicionar tipo de produto</ProductAddText>
          </ProductAddButton>
        </DivAlign>
      </Container>
    </Template>
  );
}
