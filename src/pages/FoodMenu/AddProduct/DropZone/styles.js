import styled from "styled-components";

export const Section = styled.section`
  background: #fff;
  width: 300px;
  height: 300px;
  border: 1px dashed ${(props) => (props.error ? "red" : "#dddddd")};
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
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ImageUploaded = styled.img`
  width: 300px;
  height: 300px;
  border: 1px dashed #dddddd;
`;

export const ContainerRoot = styled.div`
  width: 100%;
`;
