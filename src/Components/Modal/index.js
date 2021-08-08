import React from "react";
import { useScreenMeasure } from "../../utils/isMobile";
import { Themes } from "../../utils/themes";

import {
  Container,
  Title,
  BottomContainer,
  BottomButton,
  BottomLabel,
  ClickOut,
  Row,
  TrashComponent,
  TitleEditable,
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
  showTrash = false,
  showDefaultButton = true,
  showBackButton = true,
  onClickTrash = () => console.log("Action não configurada"),
  onClick = () => console.log("Action não configurada"),
  isEditable = false,
  onChangeTitle = (event) => console.log(event.target.value),
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
        <Row showTrash={showTrash}>
          {isEditable ? (
            <TitleEditable onChange={onChangeTitle} value={title} />
          ) : (
            <Title>{title}</Title>
          )}
          {showTrash && (
            <TrashComponent onClick={onClickTrash} color={Themes().gray} />
          )}
        </Row>

        {children}

        {isMobile && displayBottom && (
          <BottomContainer
            width={width}
            className="animationModal"
            isMobile={isMobile}
          >
            {showBackButton && (
              <BottomButton onClick={cancel} outline>
                <BottomLabel outline>Voltar</BottomLabel>
              </BottomButton>
            )}
            {showDefaultButton && (
              <BottomButton onClick={onClick}>
                <BottomLabel>Continuar</BottomLabel>
              </BottomButton>
            )}
          </BottomContainer>
        )}
      </Container>

      {!isMobile && displayBottom && (
        <BottomContainer
          width={width}
          className="animationModal"
          isMobile={isMobile}
        >
          {showBackButton && (
            <BottomButton
              disabled={buttonsDisabled}
              onClick={!buttonsDisabled && cancel}
              outline
            >
              <BottomLabel disabled={buttonsDisabled} outline>
                Voltar
              </BottomLabel>
            </BottomButton>
          )}

          {showDefaultButton && (
            <BottomButton
              disabled={buttonsDisabled}
              onClick={!buttonsDisabled && onClick}
            >
              <BottomLabel disabled={buttonsDisabled}>Continuar</BottomLabel>
            </BottomButton>
          )}
        </BottomContainer>
      )}
    </>
  );
}

export default Modal;
