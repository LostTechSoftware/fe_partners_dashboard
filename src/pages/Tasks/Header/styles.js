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
