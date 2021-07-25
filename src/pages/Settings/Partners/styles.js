import styled, { css } from "styled-components";
import { Themes } from "../../../utils/themes";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 60px 0px;

  background: ${Themes().background};

  overflow-y: auto;
  overflow-x: hidden;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin-top: 10px;

  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
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
  width: 102px;
  height: 25px;

  border: 1px solid ${Themes().gray};
  box-sizing: border-box;
  border-radius: 5px;

  background: ${Themes().background};

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  color: ${Themes().wordColors};

  text-align: center;
`;

export const Preview = styled.img`
  width: 27%;
  height: 188px;

  @media only screen and (max-width: 1150px) {
    width: 40%;
  }

  @media only screen and (max-width: 900px) {
    width: 50%;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-top: 20px;
    margin-left: 0px;
  }

  ${({ margin }) =>
    margin &&
    css`
      margin-left: 20px;
    `}
`;

export const RowTheme = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  align-items: center;

  flex-wrap: wrap;
`;

export const Code = styled.div`
  > p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    text-transform: uppercase;

    color: #dddddd;
  }
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 90%;
  height: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  margin-top: 10px;
`;

export const CodeContainer = styled.div`
  display: flex;
  align-items: center;
`;
