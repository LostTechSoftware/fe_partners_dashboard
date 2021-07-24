import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";

export const DefaultInputResponsivity = styled.input`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;
  width: 60%;
  height: 60px;

  padding: 20px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: ${Themes().wordColors};

  background: ${Themes().background};

  @media (max-height: 800px) {
    width: 90%;
  }
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
  color: ${Themes().wordColors};
  margin-bottom: 1%;
`;

export const LabelInvalid = styled.div`
  @media (max-width: 800px) {
    font-size: 11px;
  }
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #e74c3c;
  margin-bottom: 1%;
`;

export const LabelCodeInput = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 1%;
  color: ${Themes().wordColors};
`;

export const LabelPassword = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #111;
  margin-bottom: 1%;
  color: ${Themes().wordColors};
`;

export const ContainerInput = styled.div`
  display: contents;
  width: 60%;
  margin-top: 20px;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    `}
`;

export const InputName = styled(DefaultInputResponsivity)``;

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    background-image: none;
    padding: 0px;
  }

  background-image: url("https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Forgot+password.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: contain;
  flex-direction: column;
  align-items: flex-end;

  background-color: ${Themes().background};
`;

export const DivAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  @media (max-width: 800px) {
    width: 40%;
  }

  width: ${({ width }) => width};
  margin-bottom: 10%;
`;

export const Button = styled.button`
  background: ${(props) => (props.disabled ? "#ddd" : "#ffe115")};
  border-radius: 5px;
  height: 60px;
  width: 60%;
  margin-top: 10%;
  border-width: 0px;

  @media (max-height: 800px) {
    width: 90%;
  }
`;

export const ButtonText = styled.text`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 25px;
`;

export const PasswordInput1 = styled(DefaultInputResponsivity)`
  margin-bottom: 2%;
`;

export const PasswordInput2 = styled(DefaultInputResponsivity)``;
