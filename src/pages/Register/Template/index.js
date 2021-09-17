import React from "react";

import { ArrowLeft } from "react-feather";
import ProgressBar from "@ramonak/react-progress-bar";
import { Themes } from "../../../utils/themes";
import {
  Container,
  Logo,
  ContainerLogo,
  ContainerImg,
  Button,
  ButtonText,
  ContainerButton,
} from "./styles";

function Template({ title = "Insira seu texto aqui", children, progress = 0 }) {
  return (
    <Container>
      <ProgressBar
        height="10px"
        width="100vw"
        isLabelVisible={false}
        completed={progress}
        bgColor="#ffe115"
        baseBgColor="#ddd"
        borderRadius="0px"
      />
      <ContainerLogo>
        <ContainerImg>
          <Logo src={Themes().logo}></Logo>
          <p>{title}</p>
        </ContainerImg>

        <ArrowLeft size={40} color="#ffe115" />
      </ContainerLogo>

      {children}

      <ContainerButton>
        <Button>
          <ButtonText>Continuar</ButtonText>
        </Button>
      </ContainerButton>
    </Container>
  );
}

export default Template;
