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
  buttonsDisabled = false,
  buttonLabel = "Continuar",
  outlineButtonLabel = "Voltar",
  onClick = () => console.log("Action não configurada"),
}) {
  const [isMobile] = useScreenMeasure();

  return (
    <Container display={show}>
      <PopUpContainer
        width={isMobile ? mobileWidth : width}
        height={isMobile ? mobileHeight : height}
      >
        <Title>{title}</Title>

        {children}

        <BottomContainer isMobile={isMobile}>
          {!oneButton && (
            <BottomButton
              disabled={buttonsDisabled}
              onClick={!buttonsDisabled && close}
              outline
            >
              <BottomLabel disabled={buttonsDisabled} outline>
                {outlineButtonLabel}
              </BottomLabel>
            </BottomButton>
          )}

          <BottomButton
            disabled={buttonsDisabled}
            onClick={!buttonsDisabled && onClick}
          >
            <BottomLabel disabled={buttonsDisabled}>{buttonLabel}</BottomLabel>
          </BottomButton>
        </BottomContainer>
      </PopUpContainer>
    </Container>
  );
}

export default PopUp;
