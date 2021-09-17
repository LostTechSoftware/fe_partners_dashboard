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

export const LabelName = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: ${Themes().wordColors};
  align-self: baseline;
`;

export const InputName = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
  type: name;
`;

export const LabelNumber = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: ${Themes().wordColors};
  margin-top: 2%;
  align-self: baseline;
`;

export const InputNumber = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
  type: number;
`;

export const LabelEmail = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: ${Themes().wordColors};
  margin-top: 2%;
  align-self: baseline;
`;

export const InputEmail = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
  type: email;
`;

export const LabelPassword = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: ${Themes().wordColors};
  margin-top: 2%;
  align-self: baseline;
`;

export const InputPassword = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
  type: password;
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

export const DivAlign = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
