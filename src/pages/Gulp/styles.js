import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";

export const Container = styled.div`
  height: 100%;
  width: 80%;
  position: absolute;
  right: 0;
  background: ${Themes().background};

  ${(props) =>
    !props.isMobile &&
    css`
      @media screen and (max-width: 1140px) {
        width: 75%;
      }

      @media screen and (max-width: 905px) {
        width: 70%;
      }
    `};

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      bottom: 0;
      left: 0;
      position: relative;
    `};

  ${(props) =>
    !props.disableScroll &&
    css`
      @media screen and (max-width: 800px) {
        overflow-y: scroll;
      }
    `};

  ${(props) =>
    props.disableScroll &&
    css`
      overflow: hidden;
    `};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${Themes().menuBars};

  @media screen and (max-width: 980px) {
    justify-content: space-around;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 20%;

  @media screen and (max-width: 980px) {
    width: 50%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const ButtonHeader = styled.div`
  width: 171px;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid ${Themes().menuBars};
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      border-bottom: 5px solid #ffe115;
    `}
`;

export const ButtonText = styled.p`
  font-weight: 300;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  color: ${Themes().wordColors};
`;

export const Selector = styled.select`
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;
  width: 170px;
  height: 35px;
  font-family: "Roboto", sans-serif;
  padding: 5px;
  background: ${Themes().menuBars};
  color: ${Themes().wordColors};
`;

export const Input = styled.input`
  background-color: transparent;

  width: 80%;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;

  color: ${Themes().gray};
`;

export const SearchBox = styled.div`
  background-color: ${Themes().menuBars};
  border-radius: 5px;
  width: 300px;
  height: 43px;
  color: ${Themes().gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerSelect = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 20%;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const ContainerSearch = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 30%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const ContainerPadding = styled.div`
  padding: 30px;
  background: ${Themes().background};
`;

export const ButtonsHeaderContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  background-color: ${Themes().background};
  color: #ffe115;
  margin-left: 5px;
  cursor: pointer;
  ${(props) =>
    props.background &&
    css`
      background-color: #ffe115;
      color: #fff;
      margin-left: 0;
    `}
  width: 215px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const TextButton = styled.p`
  color: #ffe115;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  ${(props) =>
    props.background &&
    css`
      color: #fff;
      margin-left: 15px;
    `}
`;

export const RowsProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

export const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: ${Themes().wordColors};
`;

export const RightComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22%;

  @media screen and (max-width: 1490px) {
    width: 25%;
  }

  @media screen and (max-width: 1245px) {
    width: 30%;
  }

  @media screen and (max-width: 1089px) {
    width: 35%;
  }

  @media screen and (max-width: 950px) {
    width: 40%;
  }

  @media screen and (max-width: 860px) {
    width: 50%;
  }
`;

export const ButtonEdit = styled.div`
  display: flex;
  align-items: center;
  color: ${Themes().gray};
  cursor: pointer;
`;

export const ButtonPause = styled.div`
  display: flex;
  align-items: center;
  color: #ffe115;
  cursor: pointer;
`;

export const TitleButton = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${Themes().gray};
  margin-left: 5px;
  ${(props) => props.yellow && `color: #ffe115;`};
`;

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerEdit = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin-top: 20px;
`;

export const LabelEdit = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 140.62%;

  display: flex;
  align-items: center;

  color: ${Themes().gray};
`;

export const MinorInput = styled.input`
  border: 1px solid ${Themes().gray};
  box-sizing: border-box;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;

  text-align: center;

  color: rgba(0, 0, 0, 0.8);

  width: 40px;
  height: 30px;
`;

export const Option = styled.option`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};
`;
