import styled from "styled-components";
import { Themes } from "../../../utils/themes";

export const ContainerLogo = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  > svg {
    position: absolute;
    left: 15px;
    top: 15px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  height: 100px;
  position: absolute;
  width: 100vw;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;

  > p {
    line-height: 50px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    display: flex;
    align-items: center;

    color: ${Themes().wordColors};
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${Themes().background};
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 250px;
  @media (max-height: 800px) {
    width: 200px;
  }
`;

export const ContainerButton = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 20px;
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: #ffe115;
  border-radius: 5px;
  height: 60px;
  width: 20%;

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
