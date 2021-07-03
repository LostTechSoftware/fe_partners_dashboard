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

function Modal({ cancel, children, displayBottom = false, title }) {
  const [isMobile] = useScreenMeasure();

  return (
    <>
      <ClickOut onClick={cancel} />
      <Container className="animationModal" isMobile={isMobile}>
        <Title>{title}</Title>

        {children}

        {isMobile && displayBottom && (
          <BottomContainer className="animationModal" isMobile={isMobile}>
            <BottomButton onClick={cancel} outline>
              <BottomLabel outline>Voltar</BottomLabel>
            </BottomButton>

            <BottomButton>
              <BottomLabel>Continuar</BottomLabel>
            </BottomButton>
          </BottomContainer>
        )}
      </Container>

      {!isMobile && displayBottom && (
        <BottomContainer className="animationModal" isMobile={isMobile}>
          <BottomButton onClick={cancel} outline>
            <BottomLabel outline>Voltar</BottomLabel>
          </BottomButton>

          <BottomButton>
            <BottomLabel>Continuar</BottomLabel>
          </BottomButton>
        </BottomContainer>
      )}
    </>
  );
}

export default Modal;
