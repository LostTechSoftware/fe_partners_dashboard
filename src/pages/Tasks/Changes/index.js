import React from "react";

import { Container, PopUpContainer } from "./styles";

import { useScreenMeasure } from "../../../utils/isMobile";

function Change({
  show,
  close,
  children,
  width = "90%",
  height = "50%",
  mobileWidth = "90%",
  mobileHeight = "90%",
}) {
  const [isMobile] = useScreenMeasure();

  return (
    <Container onClick={close} display={show}>
      <PopUpContainer
        width={isMobile ? mobileWidth : width}
        height={isMobile ? mobileHeight : height}
      >
        {children}
      </PopUpContainer>
    </Container>
  );
}

export default Change;
