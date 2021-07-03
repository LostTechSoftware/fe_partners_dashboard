import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const DesktopContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  position: sticky;
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
  background: #fcfcfc;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 21px;
`;

export const Top = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #fcfcfc;
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
  background-color: #fcfcfc;
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
  position:absolute;
  bottom:65px
  `}
  ${(props) =>
    props.help &&
    `
  position:absolute;
  bottom:20px
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
  color: ${(props) => (props.selected ? "#fff" : "#000")};
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
  color: ${(props) => (props.selected ? "#fff" : "#000")};
`;

export const LinkHeader = styled(ReactRouterLink)`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
  text-decoration: none;

  color: ${(props) => (props.selected ? "#fff" : "#000")};
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
