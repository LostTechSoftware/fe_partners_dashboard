import styled, { css } from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";
import { Themes } from "../../utils/themes";
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

export const DesktopContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;

  ${(props) =>
    !props.isMobile &&
    `
  @media screen and (max-width: 1140px) {
    width: 25%;
  }

  @media screen and (max-width: 905px) {
    width: 30%;
  }
  `};

  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  inset: 0;
  cursor: default;
  z-index: 6;
`;

export const DesktopContent = styled.div`
  width: 100%;
  height: 100%;
  background: ${Themes().menuBars};
  overflow-y: scroll;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 21px;
  background: ${Themes().menuBars};
`;

export const Top = styled.div`
  width: 40px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${Themes().menuBars};
`;

export const ContentMobile = styled.div`
  width: 100vw;
  height: 800px;
  @media (min-height: 850px) {
    height: 100%;
  }
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${Themes().menuBars};
  position: absolute;
  inset: 0;
  cursor: default;
  z-index: 6;
  transition: 400ms ease;
  overflow-x: auto;
  overflow-y: auto;
`;

export const ContentHeader = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  > button {
    background: transparent;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export const MenuOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15%;
`;

export const Option = styled.div`
  ${(props) =>
    props.settings &&
    `
  margin-top: 20%;
  `}
  ${(props) =>
    props.help &&
    `
    margin-top: 5%%;
  `}
  ${(props) =>
    props.selected &&
    `
  background-color:#ffe115;
  `}
  ${(props) => !props.settings && !props.help && `margin-bottom: 15px;`}
`;

export const Link = styled(ReactRouterLink)`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
  text-decoration: none;

  margin-left: 35px;
  color: ${(props) => (props.selected ? "#fff" : Themes().wordColors)};
`;

export const LinkBottom = styled.a`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
  text-decoration: none;

  margin-left: 35px;
  color: ${(props) => (props.selected ? "#fff" : Themes().wordColors)};
`;

export const LinkHeader = styled(ReactRouterLink)`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
  text-decoration: none;

  color: ${(props) => (props.selected ? "#fff" : Themes().wordColors)};
`;

export const Image = styled.img`
  width: 175px;
  height: 40px;
  margin-top: 25px;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 54px;
  align-items: center;
  align-self: stretch;
  flex-grow: 0;
  padding: 0 25px;
`;

export const RotateSubMenuToggleArrow = styled(ChevronDown)`
  ${({ toggled }) =>
    !toggled &&
    css`
      transform: rotate(90deg);
    `}
`;

export const ToggleSubMenu = styled.div`
  margin: 0px 10px;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const subOptionDefaultStyles = css`
  border-left: 2px solid rgb(224, 224, 224, 0.8);
  color: #414141;
`;

const subOptionActiveStyles = css`
  border-left: 4px solid #ddd;
  color: #ddd;
`;
export const SubOption = styled.ul`
  display: ${(props) => (props.isSubMenuToggled ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 30px;

  > li {
    ${(props) =>
      props.active ? subOptionActiveStyles : subOptionDefaultStyles}
    padding: 12px 16px;

    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }
`;
