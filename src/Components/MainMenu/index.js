import React, { useState, useEffect } from "react";
import {
  Settings,
  HelpCircle,
  MessageCircle,
  Map,
  TrendingUp,
  Menu,
  DollarSign,
} from "react-feather";
import MaterialIcon from "material-icons-react";

import {
  DesktopContainer,
  DesktopContent,
  MobileContainer,
  Top,
  ContentMobile,
  ContentHeader,
  MenuOptions,
  NavTitle,
  Option,
  Link,
  LogoutContainer,
  Image,
  ContainerButton,
  LinkHeader,
  LinkBottom,
} from "./styles";
import { useMenu } from "./hooks";
import { Hamburguer } from "../hamburguer";
import { CaretDoubleLeft } from "../svg/caret-double-left";
import { useScreenMeasure } from "../../utils/isMobile";

const Icon = ({ icon, color }) => {
  const icons = {
    Mensagens: <MessageCircle color={color} size={30} />,
    Mapa: <Map color={color} size={30} />,
    Impulsionar: <TrendingUp color={color} size={30} />,
    Produtos: <Menu color={color} size={30} />,
    Finanças: <DollarSign color={color} size={30} />,
    Pedidos: <MaterialIcon icon="ramen_dining" size={30} color={color} />,
  };
  return icons[icon] || <p />;
};

export default function MainMenu({ currentPage }) {
  const [modalOpen, setModalOpen] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [isMobile] = useScreenMeasure();

  function isTheCurrentPage(page) {
    if (page === currentPage) return "onPage";
    else return null;
  }

  useEffect(() => {
    setAvatar(sessionStorage.getItem("avatar"));
  }, []);

  const { isMenuMobileOpened, handleMenuMobileOpen, menuOptions } = useMenu();

  return (
    <>
      {isMobile ? (
        <MobileContainer>
          <Top onClick={handleMenuMobileOpen}>
            <Hamburguer />
          </Top>

          {isMenuMobileOpened && (
            <>
              <ContentMobile>
                <ContentHeader>
                  <Link to="/">
                    <Image src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Logos/FoodZilla.svg" />
                  </Link>
                  <button type="button" onClick={handleMenuMobileOpen}>
                    <CaretDoubleLeft />
                  </button>
                </ContentHeader>

                <MenuOptions>
                  {menuOptions.map((option, index) => (
                    <Option selected={index === 0} key={index}>
                      <ContainerButton>
                        <Icon
                          color={index === 0 ? "#fff" : "#000"}
                          icon={option.text}
                        />
                        <Link selected={index === 0} to={option.route}>
                          {option.text}
                        </Link>
                      </ContainerButton>
                    </Option>
                  ))}

                  <Option settings>
                    <ContainerButton>
                      <Settings
                        color={false === 0 ? "#fff" : "#000"}
                        size={30}
                      />
                      <Link>Configurações</Link>
                    </ContainerButton>
                  </Option>

                  <Option help>
                    <ContainerButton>
                      <HelpCircle
                        color={false === 0 ? "#fff" : "#000"}
                        size={30}
                      />
                      <LinkBottom href="https://helpcenter.foodzilla.com.br">
                        Ajuda
                      </LinkBottom>
                    </ContainerButton>
                  </Option>
                </MenuOptions>
              </ContentMobile>
            </>
          )}
        </MobileContainer>
      ) : (
        <DesktopContainer>
          <DesktopContent>
            <ContentHeader>
              <LinkHeader to="/">
                <Image src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Logos/FoodZilla.svg" />
              </LinkHeader>
            </ContentHeader>

            <MenuOptions>
              {menuOptions.map((option, index) => (
                <Option selected={index === 0} key={index}>
                  <ContainerButton>
                    <Icon
                      color={index === 0 ? "#fff" : "#000"}
                      icon={option.text}
                    />
                    <Link selected={index === 0} to={option.route}>
                      {option.text}
                    </Link>
                  </ContainerButton>
                </Option>
              ))}

              <Option settings>
                <ContainerButton>
                  <Settings color={false === 0 ? "#fff" : "#000"} size={30} />
                  <Link>Configurações</Link>
                </ContainerButton>
              </Option>

              <Option help>
                <ContainerButton>
                  <HelpCircle color={false === 0 ? "#fff" : "#000"} size={30} />
                  <LinkBottom href="https://helpcenter.foodzilla.com.br">
                    Ajuda
                  </LinkBottom>
                </ContainerButton>
              </Option>
            </MenuOptions>
          </DesktopContent>
        </DesktopContainer>
      )}
    </>
  );
}
