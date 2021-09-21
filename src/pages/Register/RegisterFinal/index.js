import React from "react";
import { Themes } from "../../../utils/themes";

import {
  ContainerImage,
  Image,
  DivText,
  Logo,
  Text,
  Button,
  ButtonText,
} from "./styles";

export default function RegisterFinal() {
  return (
    <ContainerImage>
      <Image src="https://foodzilla-images.s3.us-east-2.amazonaws.com/Cooking.png" />
      <DivText>
        <Logo src={Themes().logo}></Logo>
        <Text>Parece que chegamos ao fim</Text>
        <Text>Parabéns, você completou o cadastro no FoodZilla Partners!</Text>
        <Text>
          Logo logo entraremos em contato com você, então é só aguardar
        </Text>
        <Text>
          Enquanto isso, que tal ir aprendendo a usar nosso aplicatio no nosso
          canal do YouTube ?
        </Text>

        <Button>
          <ButtonText>Visitar canal</ButtonText>
        </Button>
      </DivText>
    </ContainerImage>
  );
}
