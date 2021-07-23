import styled from "styled-components";
import { Themes } from "../../../utils/themes";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  margin: 10px 0;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;

  color: ${Themes().wordColors};
`;

export const Input = styled.input`
  border: 1px solid #dddddd;
  box-sizing: border-box;

  height: 40px;
  width: 250px;

  border-radius: 5px;

  background: ${Themes().background};

  color: ${Themes().wordColors};

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 70%;
`;
