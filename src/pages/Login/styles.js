import styled from "styled-components";

import { Themes } from "../../utils/themes";

export const ContainerImage = styled.div`
  display: flex;
  height: 100%;
  background: ${Themes().background};
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
  color: #dddddd;
`;

export const ContainerInput = styled.div`
  width: 90%;
  margin-top: 20px;
  ${(props) =>
    props.half &&
    `
    width: 50%;
  `}
  ${(props) =>
    props.flex &&
    `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap
  `}
`;

export const InputName = styled.input`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  ${(props) =>
    props.half &&
    `
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
  background: ${Themes().background};
`;

export const Logo = styled.img`
  width: 40%;
  margin-bottom: 10%;
`;

export const Button = styled.button`
  background: #ffe115;
  border-radius: 5px;
  width: 90%;
  height: 5%;
  margin-top: 10%;
  border-width: 0px;
`;

export const ButtonText = styled.text`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 25px;
`;

export const Form = styled.form`
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-right: 0px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  right: 0;
  padding-right: 10%;
  width: 40%;
`;

export const Image = styled.img`
  @media screen and (max-width: 800px) {
    width: 0%;
    padding-right: 0px;
  }
  height: 85%;
  width: 50%;
  object-fit: contain;
`;

export const InputPassword = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 40%;
  height: 50px;
  padding: 10px;
  type: password;
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

export const ForgotPassword = styled.button`
  background: ${Themes().background};
  border-width: 0;
  color: #ffe115;
  display: flex;
  margin-top: 1%;
`;

export const DivAlign = styled.div``;
