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

function Settings({ children }) {
  const [isMobile] = useScreenMeasure();
  const [isMenuMobileOpened, setIsMenuMobileOpened, handleMenuMobileOpen] =
    useSettings();

  return (
    <div className="page foodMenu">
      <MainMenu
        isMenuMobileOpened={isMenuMobileOpened}
        onClick={handleMenuMobileOpen}
        currentPage="settings"
      />
      <Container isMobile={isMobile}>
        <Header>
          <Logo src="https://pbs.twimg.com/profile_images/1402367254067568641/LTLk2lAL_400x400.jpg" />
          <ContainerButtons>
            <ButtonHeader selected>
              <ButtonText>Perfil</ButtonText>
            </ButtonHeader>

            <ButtonHeader>
              <ButtonText>Acessos</ButtonText>
            </ButtonHeader>

            <ButtonHeader>
              <ButtonText>Pagamentos</ButtonText>
            </ButtonHeader>

            <ButtonHeader>
              <ButtonText>Configurações do estabelecimento</ButtonText>
            </ButtonHeader>
          </ContainerButtons>
          <ContainerSkip>
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
