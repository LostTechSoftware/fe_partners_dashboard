import styled from "styled-components";

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
  width: 40%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const LabelAddress = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ddd;
  align-self: baseline;
  margin-top: 1%;
`;

export const InputAddress = styled.input`
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

export const LabelComplement = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ddd;
  margin-top: 2%;
  align-self: baseline;
`;

export const InputComplement = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
`;
