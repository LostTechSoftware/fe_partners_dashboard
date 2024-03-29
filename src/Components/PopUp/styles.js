import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";

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

export const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;

  text-align: center;

  color: #000000;

  color: ${Themes().wordColors};
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

export const BottomContainer = styled.div`
  position: absolute;

  bottom: 0;

  display: flex;
  background: ${Themes().background};
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 90%;
    position: relative;
  }

  @media screen and (min-width: 800px) {
    right: 0;
  }

  height: 75px;
  align-items: center;
  justify-content: space-around;

  ${(props) =>
    props.reorder &&
    css`
      position: relative;
    `}
`;

export const BottomButton = styled.div`
  background: #ffe115;
  border-radius: 5px;
  width: 45%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  ${(props) =>
    props.outline &&
    css`
      border: 1px solid #ffe115;
      box-sizing: border-box;
      background: ${Themes().background};
      border-radius: 5px;
    `}

  ${(props) =>
    props.disabled &&
    css`
      box-sizing: border-box;
      border: 0;
      background: #ddd;
      border-radius: 5px;
    `}
`;

export const BottomLabel = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  text-align: center;

  color: #ffffff;
  ${(props) =>
    props.outline &&
    css`
      color: #ffe115;
    `}

  ${(props) =>
    props.disabled &&
    css`
      color: #fff;
    `}
`;
