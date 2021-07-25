import React from "react";
import MainMenu from "../../Components/MainMenu";
import { useScreenMeasure } from "../../utils/isMobile";
import { useScala } from "./hooks";

import {
  Container,
  ContainerButtons,
  ButtonHeader,
  ButtonText,
  Header,
} from "./styles";

function Scala({ children, path = "stories" }) {
  const [isMobile] = useScreenMeasure();
  const [isMenuMobileOpened, handleMenuMobileOpen, history] = useScala();

  return (
    <div className="page foodMenu">
      <MainMenu
        isMenuMobileOpened={isMenuMobileOpened}
        onClick={handleMenuMobileOpen}
        currentPage="boost/stories"
      />
      <Container isMobile={isMobile}>
        <Header>
          <ContainerButtons>
            <ButtonHeader
              onClick={() => history.push("/boost/stories")}
              selected={path === "stories"}
            >
              <ButtonText>Stories</ButtonText>
            </ButtonHeader>
          </ContainerButtons>
        </Header>
        {children}
      </Container>
    </div>
  );
}

export default Scala;
