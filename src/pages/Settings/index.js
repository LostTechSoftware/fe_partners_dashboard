import React from "react";
import { LogOut } from "react-feather";
import MainMenu from "../../Components/MainMenu";
import { useScreenMeasure } from "../../utils/isMobile";
import { useSettings } from "./hooks";

import {
  Container,
  Header,
  ContainerButtons,
  ButtonHeader,
  ButtonText,
  Logo,
  Skip,
  ContainerSkip,
} from "./styles";

function Settings({ children, path = "profile", disableScroll }) {
  const [isMobile] = useScreenMeasure();
  const [
    isMenuMobileOpened,
    setIsMenuMobileOpened,
    handleMenuMobileOpen,
    history,
  ] = useSettings();

  return (
    <div className="page foodMenu">
      <MainMenu
        isMenuMobileOpened={isMenuMobileOpened}
        onClick={handleMenuMobileOpen}
        currentPage="settings"
      />
      <Container disableScroll={disableScroll} isMobile={isMobile}>
        <Header>
          <Logo src={sessionStorage.getItem("avatar")} />
          <ContainerButtons>
            <ButtonHeader
              onClick={() => history.push("/settings/profile")}
              selected={path === "profile"}
            >
              <ButtonText>Perfil</ButtonText>
            </ButtonHeader>

            <ButtonHeader
              onClick={() => history.push("/settings/access")}
              selected={path === "access"}
            >
              <ButtonText>Acessos</ButtonText>
            </ButtonHeader>

            <ButtonHeader
              onClick={() => history.push("/settings/payments")}
              selected={path === "payments"}
            >
              <ButtonText>Pagamentos</ButtonText>
            </ButtonHeader>

            <ButtonHeader
              onClick={() => history.push("/settings/partners")}
              selected={path === "partners"}
            >
              <ButtonText>Configurações do estabelecimento</ButtonText>
            </ButtonHeader>
          </ContainerButtons>
          <ContainerSkip
            onClick={() => {
              sessionStorage.clear();
              history.push("/");
            }}
          >
            <LogOut color="#ddd" size={30} />
            <Skip>Sair da conta</Skip>
          </ContainerSkip>
        </Header>
        {children}
      </Container>
    </div>
  );
}

export default Settings;
