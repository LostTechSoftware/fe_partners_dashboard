import styled from "styled-components";
import { Themes } from "../../../utils/themes";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;

  background: ${Themes().background};

  overflow-y: auto;
  overflow-x: hidden;
`;

export const Content = styled.div``;

export const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;

  color: ${Themes().wordColors};
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Label = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;

  color: ${Themes().wordColors};
`;

export const Row = styled.div`
  display: flex;
  margin-top: 15px;

  width: 250px;
`;

export const Text = styled.p``;
