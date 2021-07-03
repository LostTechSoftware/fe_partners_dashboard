import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;

  color: #000000;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;

  padding: 5px;
  color: rgba(0, 0, 0, 0.8);

  width: 70%;
  height: 60px;

  margin-top: 20px;
`;
