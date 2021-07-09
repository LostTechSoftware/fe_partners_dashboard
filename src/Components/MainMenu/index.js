import React from "react";
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
  Option,
  Link,
  Image,
  ContainerButton,
  LinkHeader,
  LinkBottom,
} from "./styles";
import { useMenu } from "./hooks";
import { Hamburguer } from "../hamburguer";
import { CaretDoubleLeft } from "../svg/caret-double-left";
import { useScreenMeasure } from "../../utils/isMobile";
import { Themes } from "../../utils/themes";

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

export default function MainMenu({ currentPage, isMenuMobileOpened, onClick }) {
  const [isMobile] = useScreenMeasure();
  const { menuOptions } = useMenu();

  return (
    <>
      {isMobile ? (
        <MobileContainer>
          <Top onClick={onClick}>
            <Hamburguer />
          </Top>

          {isMenuMobileOpened && (
            <>
              <ContentMobile>
                <ContentHeader>
                  <Link to="/">
                    <Image src={Themes().logo} />
                  </Link>
                  <button type="button" onClick={onClick}>
                    <CaretDoubleLeft />
                  </button>
                </ContentHeader>

                <MenuOptions>
                  {menuOptions.map((option, index) => (
                    <Option selected={currentPage == option.route} key={index}>
                      <ContainerButton>
                        <Icon
                          color={
                            currentPage == option.route
                              ? "#fff"
                              : Themes().wordColors
                          }
                          icon={option.text}
                        />
                        <Link
                          selected={currentPage == option.route}
                          to={`/${option.route}`}
                        >
                          {option.text}
                        </Link>
                      </ContainerButton>
                    </Option>
                  ))}

                  <Option settings>
                    <ContainerButton>
                      <Settings
                        color={
                          currentPage == "/setting"
                            ? "#fff"
                            : Themes().wordColors
                        }
                        size={30}
                      />
                      <Link>Configurações</Link>
                    </ContainerButton>
                  </Option>

                  <Option help>
                    <ContainerButton>
                      <HelpCircle color={Themes().wordColors} size={30} />
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
        <DesktopContainer isMobile={isMobile}>
          <DesktopContent>
            <ContentHeader>
              <LinkHeader to="/">
                <Image src={Themes().logo} />
              </LinkHeader>
            </ContentHeader>

            <MenuOptions>
              {menuOptions.map((option, index) => (
                <Option selected={currentPage == option.route} key={index}>
                  <ContainerButton>
                    <Icon
                      color={
                        currentPage == option.route
                          ? "#fff"
                          : Themes().wordColors
                      }
                      icon={option.text}
                    />
                    <Link
                      selected={currentPage == option.route}
                      to={`/${option.route}`}
                    >
                      {option.text}
                    </Link>
                  </ContainerButton>
                </Option>
              ))}

              <Option settings>
                <ContainerButton>
                  <Settings
                    color={
                      currentPage == "/setting" ? "#fff" : Themes().wordColors
                    }
                    size={30}
                  />
                  <Link>Configurações</Link>
                </ContainerButton>
              </Option>

              <Option help>
                <ContainerButton>
                  <HelpCircle color={Themes().wordColors} size={30} />
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
