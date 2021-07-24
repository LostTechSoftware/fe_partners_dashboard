import styled, { css } from "styled-components";
import { Themes } from "../../../../utils/themes";

export const Section = styled.section`
  background: ${Themes().background};
  width: 260px;
  height: 260px;
  border: 0.56px dashed ${(props) => (props.error ? "red" : "#ddd")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #ddd;

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      width: 400px;
      height: 400px;
    `}
`;

export const Text = styled.div`
  ${(props) =>
    props.margin &&
    css`
      margin-left: 20px;
    `}

  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;

  > p {
    margin: 5px 0;
  }

  > .title {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;

    display: flex;
    align-items: center;
    text-align: center;

    color: ${Themes().wordColors};
  }

  > .textDrop {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #dddddd;

    display: flex;
    flex-direction: column;

    > .link {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;

      display: flex;
      align-items: center;
      text-align: center;

      color: #ffe115;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ImageUploaded = styled.img`
  width: 296px;
  height: 296px;
`;

export const ContainerRoot = styled.div`
  width: 100%;
`;

export const ContainerHeader = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: flex-start;
  color: #ddd;
  cursor: pointer;
`;

export const ContainerDragAndDrop = styled.div``;
