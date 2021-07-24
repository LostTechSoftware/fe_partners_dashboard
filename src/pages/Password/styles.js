import styled from "styled-components";

import { Themes } from "../../utils/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 50%;
  object-fit: contain;

  background: ${Themes().background};

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Form = styled.div`
  width: 50%;
  height: 100%;

  background: ${Themes().background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const LabelInput = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${Themes().wordColors};

  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 60px;
  width: 60%;

  border-radius: 5px;

  background: ${Themes().background};
  border: 1px solid #dddddd;

  color: ${Themes().wordColors};

  padding: 20px;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const Button = styled.div`
  height: 60px;
  width: 60%;

  @media (max-width: 800px) {
    width: 90%;
  }

  border-radius: 5px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background: #ffe115;

  margin-top: 70px;

  cursor: pointer;

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${Themes().wordColors};

  margin-bottom: 15%;

  text-transform: capitalize;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const Other = styled.div`
  width: 60%;

  @media (max-width: 800px) {
    width: 90%;
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    text-align: right;

    color: #ffe115;

    cursor: pointer;
  }
`;
