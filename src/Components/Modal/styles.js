import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";
import { Trash } from "react-feather";

export const Container = styled.div`
  background: ${Themes().background};
  right: 0;
  width: ${(props) => props.width}%;
  box-shadow: 5px 5px 15px 5px #00000057;
  ${(props) =>
    props.isMobile &&
    `
    width: 100%;
    height: 100%;
  `}

  bottom: 0;
  padding-bottom: 80px;

  ${(props) =>
    !props.isMobile &&
    `
  
    @media screen and (max-width: 1220px) {
      width: 50%;
    }
  
    @media screen and (max-width: 1020px) {
      width: 60%;
    }
  
    @media screen and (max-width: 900px) {
      width: 70%;
    }
  
  `}

  position: absolute;
  top: 0;
  transition: 400ms ease;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ClickOut = styled.div`
  left: 0;
  width: ${(props) => props.width}%;
  ${(props) =>
    props.isMobile &&
    `
    display: none;
  `}

  bottom: 0;

  position: absolute;
  top: 0;
  transition: 400ms ease;
`;

export const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${Themes().wordColors};
`;

export const BottomContainer = styled.div`
  position: absolute;
  right: 0;

  ${(props) =>
    !props.isMobile &&
    `
      bottom: 0;
    `}

  display: flex;
  background: ${Themes().background};
  width: ${(props) => props.width}%;

  ${(props) =>
    props.isMobile &&
    `
  width: 100%;
  `}

  ${(props) =>
    !props.isMobile &&
    `
    @media screen and (max-width: 1220px) {
      width: 50%;
    }
  
    @media screen and (max-width: 1020px) {
      width: 60%;
    }
  
    @media screen and (max-width: 900px) {
      width: 70%;
    }
  `}

  height: 75px;
  align-items: center;
  justify-content: space-around;
`;

export const BottomButton = styled.div`
  background: #ffe115;
  border-radius: 5px;
  width: 45%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.outline &&
    ` border: 1px solid #FFE115;
      box-sizing: border-box;
      background: ${Themes().background};
      border-radius: 5px;
    `}

  ${(props) =>
    props.disabled &&
    `   box-sizing: border-box;
        border: 0;
        background: #ddd;
        border-radius: 5px;
      `}
`;

export const BottomLabel = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  text-align: center;

  color: #ffffff;
  ${(props) =>
    props.outline &&
    ` 
    color:#ffe115
  `}

  ${(props) =>
    props.disabled &&
    ` 
    color:#fff
  `}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 100px;
  align-items: center;
  margin-top: 20px;

  ${({ showTrash }) =>
    !showTrash &&
    css`
      justify-content: center;
    `}
`;

export const TrashComponent = styled(Trash)`
  cursor: pointer;
`;
