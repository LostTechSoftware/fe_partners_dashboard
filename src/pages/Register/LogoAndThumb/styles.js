import styled from "styled-components";
import { Themes } from "../../../utils/themes";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DivAlign = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const ThumbNail = styled.div`
  border: 2px #ddd solid;
  border-style: dashed;

  width: 100%;
  height: 250px;

  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${(props) => props.src});

  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffe115;

  transition: all 0.5s;
`;

export const Logo2 = styled.div`
  border: 2px #ddd solid;
  border-style: dashed;

  width: 100px;
  height: 100px;
  border-radius: 100px;

  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${(props) => props.src});

  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffe115;
`;
