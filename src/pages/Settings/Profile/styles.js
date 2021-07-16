import styled, { css } from "styled-components";
import { Themes } from "../../../utils/themes";

export const ThumbNail = styled.img`
  width: 100%;
  height: 250px;
`;

export const Logo2 = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;

  margin-top: -60px;
  margin-left: 60px;
`;

export const GridInputs = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: ${Themes().background};

  padding: 40px 0px;
`;

export const InputName = styled.div`
  border-bottom: 1px solid ${Themes().gray};
  background: ${Themes().background};
  box-sizing: border-box;
  width: 100%;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};

  padding: 15px 0px;

  height: 48px;
`;

export const Input = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Label = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().gray};
`;

export const ContainerInput = styled.div`
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 90%;
  }

  ${(props) =>
    !props.zeroMargin &&
    css`
      margin-top: 20px;
    `}

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    `}

  ${(props) =>
    props.zeroMargin &&
    css`
      margin: 0;
    `}
`;
