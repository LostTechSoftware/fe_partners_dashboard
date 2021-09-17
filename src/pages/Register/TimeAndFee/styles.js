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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const TopText = styled.label`
  font-weight: 400;
  font-size: 18px;
  align-self: baseline;
`;

export const ColumnDiv = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 1%;
`;

export const TextLabel = styled.label`
  font-weight: 300;
  font-size: 15px;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 50%;
`;

export const Div = styled.div``;
