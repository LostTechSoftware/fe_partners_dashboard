import styled, { css } from "styled-components";

export const Section = styled.section`
  background: #fff;
  width: 300px;
  height: 300px;
  border: 3px dashed ${(props) => (props.error ? "red" : "#ddd")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #ddd;
`;

export const Text = styled.text`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #dddddd;

  ${(props) =>
    props.margin &&
    css`
      margin-left: 20px;
    `}
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
