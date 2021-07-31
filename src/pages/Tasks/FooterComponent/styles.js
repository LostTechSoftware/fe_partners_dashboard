import styled, { css } from "styled-components";
import { Themes } from "../../../utils/themes";

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;

  width: 100%;

  background: ${Themes().background};

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 0px;
    margin-top: 20px;
  }
`;

export const Button = styled.div`
  background: #ffe115;
  border-radius: 5px;

  height: 55px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;

  @media screen and (max-width: 800px) {
    margin-top: 10px;
  }

  ${({ half }) =>
    half &&
    css`
      width: 90%;
      margin-left: 10px;
    `}

  ${({ outline }) =>
    outline &&
    css`
      background: ${Themes().background};
      border: 1px solid #ffe115;
    `}
`;

export const ContainerPrice = styled.div`
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${({ margin }) =>
    margin &&
    css`
      margin: 10px 0px;
    `}
`;

export const TextButton = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140.62%;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  ${({ outline }) =>
    outline &&
    css`
      color: #ffe115;
    `}
`;

export const Label = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: ${Themes().wordColors};

  width: 50%;
`;

export const Value = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: ${Themes().gray};

  width: 50%;
  text-align: end;
`;

export const ContainerSend = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 40%;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 20px;
  }
`;
