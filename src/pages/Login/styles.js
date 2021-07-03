import styled from "styled-components";

export const ContainerImage = styled.div`
  display: flex;
  height: 100%;
`;

export const ContainerElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 30%;
  margin-bottom: 10%;
`;

export const Button = styled.button`
  background: #ffe115;
  border-radius: 5px;
  width: 40%;
  height: 5%;
  margin-top: 10%;
  border-width: 0px;
`;

export const ButtonText = styled.text`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
`;

export const Image = styled.img``;

export const InputName = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 40%;
  height: 50px;
  padding: 10px;
  margin-bottom: 3%;
`;

export const InputPassword = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 40%;
  height: 50px;
  padding: 10px;
`;

export const LabelName = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ddd;
`;

export const LabelPassword = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ddd;
`;
