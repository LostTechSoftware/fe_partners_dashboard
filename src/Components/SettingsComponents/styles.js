import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";

export const Container = styled.div`
  ${({ zeroMargin }) =>
    !zeroMargin &&
    css`
      border-bottom: 1px solid #dddddd;
    `}

  box-sizing: border-box;
  width: 90%;

  padding: 50px 20px;

  display: flex;
  flex-direction: column;

  background: ${Themes().background};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;

  justify-content: space-between;
`;

export const Title = styled.p`
  color: ${Themes().wordColors};

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  height: 100%;
`;

export const Collapsable = styled.div`
  margin-top: 25px;
`;

export const ContainerCheckBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;
