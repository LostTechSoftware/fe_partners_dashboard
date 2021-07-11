import React from "react";
import {
  Settings,
  HelpCircle,
  MessageCircle,
  Map,
  TrendingUp,
  Menu,
  DollarSign,
  ChevronDown,
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
  ToggleSubMenu,
  SubOption,
  RotateSubMenuToggleArrow,
  Toggled,
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

export default function MainMenu({
  currentPage,
  isMenuMobileOpened,
  onClick,
  toggleMenu = false,
  setToggleMenu = () => console.log("Ooops, venha trabalhar conosco dev"),
}) {
  const [isMobile] = useScreenMeasure();
  const { menuOptions, toggled, setToggled } = useMenu();

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
                          currentPage == "/settings"
                            ? "#fff"
                            : Themes().wordColors
                        }
                        size={30}
                      />
                      <Link>Configurações</Link>
                      <ToggleSubMenu
                        onClick={() => setToggled(!toggled)}
                        isSubMenuToggled={toggled}
                      >
                        <RotateSubMenuToggleArrow
                          color={Themes().gray}
                          toggled={toggled}
                        />
                      </ToggleSubMenu>
                    </ContainerButton>
                    <SubOption isSubMenuToggled={toggled}>
                      <li>
                        <Link to={"/settings/profile"}>Perfil</Link>
                      </li>
                      <li>
                        <Link to={"/settings/access"}>Acessos</Link>
                      </li>
                      <li>
                        <Link to={"/settings/payments"}>Pagamentos</Link>
                      </li>
                      <li>
                        <Link to={"/settings/partners"}>Estabelecimento</Link>
                      </li>
                    </SubOption>
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
                <Option
                  onClick={() => setToggleMenu(!toggleMenu)}
                  selected={currentPage == option.route}
                  key={index}
                >
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
                    {option.route === "requests" && toggleMenu && (
                      <Toggled onClick={() => setToggleMenu(!toggleMenu)}>
                        <CaretDoubleLeft />
                      </Toggled>
                    )}
                  </ContainerButton>
                </Option>
              ))}

              <Option selected={currentPage == "settings"} settings>
                <ContainerButton>
                  <Settings
                    color={
                      currentPage == "settings" ? "#fff" : Themes().wordColors
                    }
                    size={30}
                  />
                  <Link
                    selected={currentPage == "settings"}
                    to="/settings/profile"
                  >
                    Configurações
                  </Link>
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
