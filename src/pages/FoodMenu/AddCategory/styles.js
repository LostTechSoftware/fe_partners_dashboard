import styled from "styled-components";
import { Themes } from "../../../utils/themes";

export const Container = styled.div`
  margin-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Themes().background};
`;

export const Label = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;

  color: ${Themes().wordColors};
`;

export const Input = styled.input`
  background: ${Themes().background};
  border: 1px solid ${Themes().gray};
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;

  padding: 5px;
  color: ${Themes().wordColors};

  width: 70%;
  height: 60px;

  margin-top: 20px;
`;
