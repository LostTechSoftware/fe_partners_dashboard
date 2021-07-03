import React from "react";

import {
  Container,
  Title,
  PopUpContainer,
  BottomContainer,
  BottomButton,
  BottomLabel,
} from "./styles";

import { useScreenMeasure } from "../../utils/isMobile";

function PopUp({
  title = "Nova categoria de adicionais",
  show,
  close,
  children,
  width = "90%",
  height = "50%",
  mobileWidth = "90%",
  mobileHeight = "90%",
  oneButton = false,
  buttonLabel = "Continuar",
  outlineButtonLabel = "Voltar",
}) {
  const [isMobile] = useScreenMeasure();

  return (
    <Container display={show} onClick={close}>
      <PopUpContainer
        width={isMobile ? mobileWidth : width}
        height={isMobile ? mobileHeight : height}
      >
        <Title>{title}</Title>

        {children}

        <BottomContainer isMobile={isMobile}>
          {!oneButton && (
            <BottomButton onClick={close} outline>
              <BottomLabel outline>{outlineButtonLabel}</BottomLabel>
            </BottomButton>
          )}

          <BottomButton>
            <BottomLabel>{buttonLabel}</BottomLabel>
          </BottomButton>
        </BottomContainer>
      </PopUpContainer>
    </Container>
  );
}

export default PopUp;
