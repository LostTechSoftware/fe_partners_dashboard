import styled from "styled-components";
import { Themes } from "../../../utils/themes";

export const ContainerImage = styled.div`
  display: flex;
  background: ${Themes().background};

  @media (max-width: 800px) {
    padding: 20px 0;
  }

  overflow-y: scroll;
  height: 100%;
`;

export const Image = styled.img`
  @media screen and (max-width: 800px) {
    display: none;
  }

  height: 100%;
  width: 50%;
  object-fit: contain;
`;

export const DivText = styled.div`
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-right: 0px;

    padding: 15px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
`;

export const Logo = styled.img`
  width: 40%;
  margin-bottom: 4%;

  @media (max-height: 800px) {
    width: 60%;
  }
`;

export const Text = styled.text`
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 4%;
`;

export const Button = styled.button`
  background: #ffe115;
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
