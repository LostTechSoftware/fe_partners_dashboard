import React from "react";
import { useScreenMeasure } from "../../utils/isMobile";

import {
  Container,
  Title,
  BottomContainer,
  BottomButton,
  BottomLabel,
  ClickOut,
} from "./styles";
import "./styles.css";

function Modal({
  cancel,
  children,
  displayBottom = false,
  title,
  width = 40,
  height = 100,
  buttonsDisabled = false,
  onClick = () => console.log("Action não configurada"),
}) {
  const [isMobile] = useScreenMeasure();

  return (
    <>
      <ClickOut
        width={100 - width}
        height={height}
        disabled={buttonsDisabled}
        onClick={!buttonsDisabled && cancel}
      />
      <Container
        width={width}
        height={height}
        className="animationModal"
        isMobile={isMobile}
      >
        <Title>{title}</Title>

        {children}

        {isMobile && displayBottom && (
          <BottomContainer
            width={width}
            className="animationModal"
            isMobile={isMobile}
          >
            <BottomButton onClick={cancel} outline>
              <BottomLabel outline>Voltar</BottomLabel>
            </BottomButton>

            <BottomButton onClick={onClick}>
              <BottomLabel>Continuar</BottomLabel>
            </BottomButton>
          </BottomContainer>
        )}
      </Container>

      {!isMobile && displayBottom && (
        <BottomContainer
          width={width}
          className="animationModal"
          isMobile={isMobile}
        >
          <BottomButton
            disabled={buttonsDisabled}
            onClick={!buttonsDisabled && cancel}
            outline
          >
            <BottomLabel disabled={buttonsDisabled} outline>
              Voltar
            </BottomLabel>
          </BottomButton>

          <BottomButton
            disabled={buttonsDisabled}
            onClick={!buttonsDisabled && onClick}
          >
            <BottomLabel disabled={buttonsDisabled}>Continuar</BottomLabel>
          </BottomButton>
        </BottomContainer>
      )}
    </>
  );
}

export default Modal;
