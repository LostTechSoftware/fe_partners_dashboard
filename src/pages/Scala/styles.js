import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";

export const Container = styled.div`
  height: 100%;
  width: 80%;
  position: absolute;
  right: 0;
  background: ${Themes().background};
  overflow-y: hidden;

  ${(props) =>
    !props.isMobile &&
    css`
      @media screen and (max-width: 1140px) {
        width: 75%;
      }

      @media screen and (max-width: 905px) {
        width: 70%;
      }
    `};

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      bottom: 0;
      left: 0;
      position: relative;
    `};

  ${(props) =>
    props.disableScroll &&
    css`
      overflow: hidden;
    `};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: ${Themes().menuBars};

  align-items: center;

  position: initial;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
`;

export const ButtonHeader = styled.div`
  height: 83px;
  width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid ${Themes().menuBars};
  cursor: pointer;
  padding: 0px 10px;

  ${(props) =>
    props.selected &&
    css`
      border-bottom: 5px solid #ffe115;
    `}
`;

export const ButtonText = styled.p`
  font-weight: 300;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  color: ${Themes().wordColors};
`;
