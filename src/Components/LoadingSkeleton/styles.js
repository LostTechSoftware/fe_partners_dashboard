import styled, { keyframes } from "styled-components";

export const FullBackground = styled.section``;

export const Heading = styled.h2``;

export const Paragraph = styled.p``;

const Shine = keyframes`
to {
    background-position-x: -200%;
  }
`;
const Fadein = keyframes`
from {opacity: 0;}
to {opacity: 1;}
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ containerHeight }) => containerHeight};
  width: ${({ containerWidth }) => containerWidth};
  border-radius: 5px;
  animation: ${Fadein} 1s;
  section {
    width: 100%;
    height: 100%;
    flex: 1 1 30%;
    border-radius: 3px;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s ${Shine} linear infinite;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 70%;
  h2,
  p {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s ${Shine} linear infinite;
  }
  h2 {
    height: 100%;
    margin: 0;
    width: ${({ containerWidth }) => containerWidth};
    flex: 1 1 20%;
  }
  p {
    height: 100%;
    margin: 5px;
    flex: 1 1 80%;
  }
`;
