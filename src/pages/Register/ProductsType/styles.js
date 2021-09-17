import styled from "styled-components";
import { Themes } from "../../../utils/themes";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DivAlign = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const LabelCheckbox = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: ${Themes().wordColors};
`;

export const DivCheckbox = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  align-self: baseline;
`;

export const TextTop = styled.text`
  align-self: baseline;
  font-weight: 300;
  font-size: 15px;
  color: ${Themes().wordColors};
  margin-bottom: 2%;
`;

export const InputProduct = styled.input`
  align-self: baseline;
  border-bottom: 1px solid #ddd;
`;

export const ProductAddButton = styled.button`
  align-self: baseline;
  border-radius: 5px;
  height: 60px;
  background: transparent;
  border-width: 0px;

  @media (max-height: 800px) {
    width: 90%;
  }
`;

export const ProductAddText = styled.text`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #ffe115;
  font-weight: 500;
`;
