import styled from "styled-components";

export const Container = styled.div`
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  border-radius: 5px;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => !props.display && `display:none`}
`;

export const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 140.62%;

  display: flex;
  align-items: center;

  color: #000000;
`;

export const PopUpContainer = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (min-width: 800px) {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  }
`;

export const BottomContainer = styled.div`
  position: absolute;

  bottom: 0;

  display: flex;
  background: #fff;
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 90%;
  }

  @media screen and (min-width: 800px) {
    right: 0;
  }

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
      background: #fff;
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
`;
