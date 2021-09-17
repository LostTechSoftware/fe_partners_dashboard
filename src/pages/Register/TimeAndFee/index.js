import React from "react";
import Template from "../Template";

import {
  Container,
  DivAlign,
  TopText,
  ColumnDiv,
  TextLabel,
  Input,
  Div,
} from "./styles";

export default function TimeAndFee() {
  return (
    <Template title="Tempo e taxas" progress="50">
      <Container>
        <DivAlign>
          <TopText>Tempo</TopText>

          <Div>
            <ColumnDiv>
              <TextLabel>Retirada</TextLabel>
              <Input placeholder="00:00" />
            </ColumnDiv>

            <ColumnDiv>
              <TextLabel>Entrega</TextLabel>
              <Input placeholder="00:00" />
            </ColumnDiv>
          </Div>

          <TopText style={{ marginTop: "5%" }}>Taxa de entrega</TopText>

          <Div>
            <ColumnDiv>
              <TextLabel>1 quilômetro</TextLabel>
              <Input placeholder="00:00" />
            </ColumnDiv>

            <ColumnDiv>
              <TextLabel>3 quilômetros</TextLabel>
              <Input placeholder="00:00" />
            </ColumnDiv>

            <ColumnDiv>
              <TextLabel>5 quilômetros</TextLabel>
              <Input placeholder="00:00" />
            </ColumnDiv>

            <ColumnDiv>
              <TextLabel>10 quilômetros</TextLabel>
              <Input placeholder="00:00" />
            </ColumnDiv>
          </Div>
        </DivAlign>
      </Container>
    </Template>
  );
}
