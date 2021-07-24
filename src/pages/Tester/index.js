import React from "react";
import { Check } from "../../assets/Check";
import { useTester } from "./hooks";

import { Container, Logo, Label, Row } from "./styles";

function Tester() {
  const [] = useTester();

  return (
    <Container>
      <Logo src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Logos/FoodZilla.svg" />
      <Label>Tester</Label>

      <Row>
        <Check />
        <p className="good">
          Parabéns! <br />
          Você agora faz parte do time de testers do FoodZilla.
        </p>
      </Row>

      <p className="containerText">
        Logo nós entraremos em contato com você, então é só aguardar! <br />
        Teremos um futuro cheio de novidades pela frente, por isso te desejamos
        boa sorte!
      </p>
    </Container>
  );
}

export default Tester;
