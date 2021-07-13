import styled, { css } from "styled-components";
import { Themes } from "../../../utils/themes";

export const Container = styled.div`
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  border-radius: 5px;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    !props.display &&
    css`
      display: none;
    `}
`;

export const PopUpContainer = styled.div`
  background: ${Themes().background};
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (min-width: 800px) {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  }
`;
