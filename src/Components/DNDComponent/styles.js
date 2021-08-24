import styled from "styled-components";
import { Themes } from "../../utils/themes";

export const ContainerFlex = styled.div`
  color: #ddd;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ContainerFlexTitle = styled.div`
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.p`
  font-family: "Roboto", sans-serifss;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;

  color: ${Themes().wordColors};
`;
