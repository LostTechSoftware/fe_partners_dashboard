import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";

export const Container = styled.div`
  width: 80%;
  position: absolute;
  right: 0;
  background: ${Themes().financeBackground};

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0px 25px 25px 25px;

  overflow-y: scroll;

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
    props.disableScroll &&
    css`
      overflow: hidden;
    `};
`;

export const Content = styled.div`
  min-height: 350px;
  background: ${Themes().background};
  border-radius: 0px 0px 5px 5px;
  width: 48%;

  ${({ align }) =>
    align &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}}

  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `};

  ${(props) =>
    !props.full &&
    css`
      @media screen and (max-width: 945px) {
        width: 100%;
      }
    `};

    ${({ mobileNotDisplay }) =>
      mobileNotDisplay &&
      css`
        @media screen and (max-width: 800px) {
          display: none;
        }
      `}

  margin-top: 25px;
`;

export const ContentHeader = styled.div`
  height: 84px;
  background: ${Themes().background};
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid ${Themes().gray};
  width: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonHeader = styled.div`
  width: 50%;

  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid ${Themes().background};
  cursor: pointer;
  padding: 0px 10px;

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

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: space-between;

  flex-wrap: wrap;
`;

export const RowTitle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  align-items: center;
`;

export const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: ${Themes().wordColors};
`;

export const Change = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 140.62%;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffe115;

  cursor: pointer;
`;

export const RowContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  height: 76%;

  padding: 0px 25px;

  flex-wrap: wrap;

  justify-content: space-between;

  @media screen and (max-width: 1373px) {
    justify-content: center;
  }
`;

export const ProgressContent = styled.div`
  width: 200px;

  @media screen and (max-width: 1373px) {
    margin-top: 20px;
  }
`;

export const ContentGoal = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin-left: 14px;

  @media screen and (max-width: 1373px) {
    padding: 20px;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Goal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowGoal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  flex-wrap: wrap;

  justify-content: space-between;

  margin-top: 20px;
`;

export const Value = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${({ small }) => (small ? "18px" : "25px")};
  line-height: 29px;

  color: ${Themes().wordColors};

  width: ${({ small }) => (small ? "120px" : "200px")};
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: ${({ small }) => (small ? "18px" : "25px")};
  line-height: 29px;

  color: ${Themes().wordColors};

  width: ${({ small }) => (small ? "120px" : "200px")};
`;

export const RowMonthDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 20px;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;

    color: ${Themes().wordColors};
  }

  > p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;

    color: ${Themes().wordColors};
  }
`;

export const Button = styled.div`
  background: #ffe115;
  height: 50px;
  width: 200px;
  left: 898px;
  top: 632px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  > p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 140.62%;

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`;

export const ButtonContainer = styled.div`
  padding: 20px;
  widht: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContent = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: ${Themes().wordColors};

  margin: 40px;
`;

export const Input = styled.input`
  width: 90%;
  height: 40px;

  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;

  background: ${Themes().background};

  text-align: center;

  color: ${Themes().wordColors};

  margin: 40px;
`;

export const ButtonContent = styled.div`
  background: #ffe115;
  height: 50px;
  width: 200px;
  left: 388px;
  top: 632px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px;

  > p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 140.62%;

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`;

export const ContainerGrid = styled.div`
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: 500px;
  }

  background: ${Themes().background};
`;

export const Product = styled.div`
  width: 400px;
  height: 70px;

  border: 1px solid ${Themes().gray};
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;

  @media screen and (min-width: 800px) {
    margin-right: 50px;
    margin-bottom: 50px;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 99%;

  border-radius: 5px;
`;

export const TitleProduct = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: ${Themes().wordColors};

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

export const Sales = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: ${Themes().gray};

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;
