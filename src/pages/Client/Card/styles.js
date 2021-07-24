import styled from "styled-components";
import { Themes } from "../../../utils/themes";

export const Container = styled.div`
  width: 80%;
  height: 100px;

  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;

  display: flex;
  align-items: center;

  margin-top: 20px;

  cursor: pointer;

  @media (max-width: 800px) {
    height: 80px;
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 99%;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 10px;
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;

  display: flex;
  align-items: center;

  color: ${Themes().wordColors};

  text-transform: capitalize;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const Access = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;

  display: flex;
  align-items: center;

  color: ${Themes().wordColors};

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const List = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${Themes().wordColors};

  margin-bottom: 20px;
`;

export const Other = styled.div`
  width: 80%;

  @media (max-width: 800px) {
    margin-top: 20px;
    width: 90%;
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    text-align: right;

    color: #ffe115;

    cursor: pointer;

    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Logo = styled.img`
  width: 40%;
  margin-bottom: 20px;
`;
