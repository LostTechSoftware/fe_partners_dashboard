import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputCNPJ = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
  type: number;
`;

export const InputRestaurant = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
  type: name;
`;

export const LabelCNPJ = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ddd;
  align-self: baseline;
`;

export const LabelRestaurant = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ddd;
  align-self: baseline;
  margin-top: 1%;
`;

export const LabelNumber = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ddd;
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

export const LabelCPF = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ddd;
  margin-top: 2%;
  align-self: baseline;
`;

export const InputCPF = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
  type: number;
`;

export const LabelCheckbox = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: #ddd;
`;

export const LabelCheckboxSMS = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: #000;
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
