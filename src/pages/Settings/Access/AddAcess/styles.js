import styled, { css } from "styled-components";
import { Themes } from "../../../../utils/themes";

export const InputName = styled.input`
  border: 1px solid ${Themes().gray};
  background: ${Themes().background};
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;

  ${(props) =>
    props.half &&
    css`
      width: 90%;
    `}

  height: 35px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};

  padding: 5px;
`;

export const Input = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 90%;
  ${(props) =>
    !props.zeroMargin &&
    css`
      margin-top: 20px;
    `}

  ${(props) =>
    props.half &&
    css`
      width: 50%;
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

export const Selector = styled.select`
  background: ${Themes().background};
  border: 1px solid #dddddd;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};

  box-sizing: border-box;
  border-radius: 5px;
  width: ${(props) => (props.full ? "100%" : "90%")};
  height: 35px;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
