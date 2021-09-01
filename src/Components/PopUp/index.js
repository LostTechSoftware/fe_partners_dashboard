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
  style = {},
  width = "90%",
  height = "50%",
  mobileWidth = "90%",
  mobileHeight = "90%",
  showBack = true,
  showDefault = true,
  buttonsDisabled = false,
  buttonContainerReorder = false,
  oneButton = false,
  clickOutside = false,
  buttonLabel = "Continuar",
  outlineButtonLabel = "Voltar",
  onClick = () => console.log("Action não configurada"),
}) {
  const [isMobile] = useScreenMeasure();

  return (
    <Container onClick={clickOutside && close} display={show}>
      <PopUpContainer
        style={style}
        width={isMobile ? mobileWidth : width}
        height={isMobile ? mobileHeight : height}
      >
        <Title>{title}</Title>

        {children}

        <BottomContainer isMobile={isMobile} reorder={buttonContainerReorder}>
          {(!oneButton || showBack) && (
            <BottomButton
              disabled={buttonsDisabled}
              onClick={!buttonsDisabled && close}
              outline
              reorder
            >
              <BottomLabel disabled={buttonsDisabled} outline>
                {outlineButtonLabel}
              </BottomLabel>
            </BottomButton>
          )}

          {showDefault && (
            <BottomButton
              disabled={buttonsDisabled}
              onClick={!buttonsDisabled && onClick}
            >
              <BottomLabel disabled={buttonsDisabled}>
                {buttonLabel}
              </BottomLabel>
            </BottomButton>
          )}
        </BottomContainer>
      </PopUpContainer>
    </Container>
  );
}

export default PopUp;
