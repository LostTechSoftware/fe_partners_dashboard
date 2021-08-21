import styled, { css } from "styled-components";
import { Themes } from "../../../utils/themes";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  background: ${Themes().background};
  overflow-y: scroll;

  flex-wrap: wrap;
  padding: 25px 25px 50px 25px;

  display: flex;

  ${(props) =>
    props.disableScroll &&
    css`
      overflow: hidden;
    `};

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const StoryContainer = styled.div`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  height: 493px;
  width: 260px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  margin-right: 35px;
  margin-bottom: 45px;

  @media (max-width: 570px) {
    margin-right: 0px;
  }

  > p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;

    color: #dddddd;

    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 5%;
  }
`;

export const StoryImage = styled.img`
  height: 95%;
  width: ${({ width }) => width || "100%"};
  border-radius: 5px;
`;

export const ContainerDropZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 493px;

  margin-right: 35px;
  margin-bottom: 45px;

  @media (max-width: 570px) {
    margin-right: 0px;
  }
`;

export const ContainerModal = styled.div`
  height: 100%;
  padding: 20px;
  justify-content: center;
  display: flex;
`;

export const EmptyContainer = styled.div`
  height: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerDropZoneEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
