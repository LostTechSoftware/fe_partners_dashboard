import React from "react";
import Template from "../Template";
import {
  Container,
  DivAlign,
  LabelAddress,
  InputAddress,
  LabelNumber,
  InputNumber,
  LabelComplement,
  InputComplement,
} from "./styles";

export default function LocalizationInfo() {
  return (
    <Template title="Onde seu estabelecimento fica ?" progress={50}>
      <Container>
        <DivAlign>
          <LabelAddress>Endereço</LabelAddress>
          <InputAddress placeholder="Endereço" />

          <LabelNumber>Número</LabelNumber>
          <InputNumber placeholder="Número" />

          <LabelComplement>Complemento</LabelComplement>
          <InputComplement placeholder="Complemento" />
        </DivAlign>
      </Container>
    </Template>
  );
}
