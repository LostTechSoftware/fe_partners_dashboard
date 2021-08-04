import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";
import { ArrowLeft } from "react-feather";

export const Container = styled.div`
  height: 100%;
  width: 80%;
  position: absolute;
  right: 0;
  background: ${Themes().background};
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
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
`;

export const OrdersList = styled.div`
  height: 100%;
  width: 40%;
  background: ${Themes().messageBars};
  display: ${({ toggleMenu }) => (toggleMenu ? "none" : "flex")};

  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 20px;
  }

  padding: 95px 20px 20px 20px;

  overflow-y: auto;
  overflow-x: hidden;

  ${({ showOrderDetails }) =>
    showOrderDetails &&
    css`
      @media screen and (max-width: 800px) {
        display: none;
      }
    `}
`;

export const OrderDetails = styled.div`
  height: 100%;
  width: 60%;
  display: flex;

  flex-direction: column;
  align-items: center;

  padding: 95px 20px 150px 20px;

  overflow-y: scroll;

  ${({ toggleMenu }) =>
    toggleMenu &&
    css`
      width: 100%;
    `}

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0px 20px 20px 20px;

    ${({ showOrderDetails }) =>
      !showOrderDetails &&
      css`
        display: none;
      `}
  }
`;

export const AppBar = styled.div`
  background: ${Themes().background};
  width: 100%;
  border-radius: 5px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Tab = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  cursor: pointer;

  color: ${Themes().wordColors};

  height: 50px;

  ${({ selected }) =>
    selected &&
    css`
      background: #ffe115;
      color: #ffffff;
    `}
`;

export const OrderComponent = styled.div`
  width: 100%;
  height: 65px;
  border-radius: 5px;
  background: ${Themes().background};
  border-left: 7px solid #ffe115;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
`;

export const OrderCode = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: ${Themes().wordColors};
`;

export const Value = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: ${Themes().wordColors};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const BasicInfo = styled.div`
  @media screen and (min-width: 920px) {
    margin-left: 20px;
  }
`;

export const Title = styled.p`
  color: ${Themes().wordColors};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  font-family: "Roboto", sans-serif;

  max-width: 75%;

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

export const Subtitle = styled.p`
  color: ${Themes().gray};

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  margin-top: 10px;
`;

export const Hour = styled.p`
  color: ${Themes().gray};

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  margin-top: 10px;
`;

export const ProductContainer = styled.div`
  border: 1px solid ${Themes().gray};
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 70px;

  margin-top: 20px;

  color: #ffe115;

  cursor: pointer;
`;

export const Image = styled.img`
  width: 70px;
  height: 99%;
  border-radius: 5px;
  object-fit: cover;
`;

export const ProductText = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: ${Themes().wordColors};

  margin-left: 10%;
  width: 300px;

  @media screen and (max-width: 1100px) {
    margin-left: 5px;
    width: 100px;
  }

  @media screen and (max-width: 800px) {
    margin-left: 5px;
    width: 40%;

    font-size: 12px;
  }
`;

export const Collapsable = styled.div`
  border-left: 1px solid ${Themes().gray};
  border-right: 1px solid ${Themes().gray};
  border-bottom: 1px solid ${Themes().gray};

  background: ${Themes().background};

  border-radius: 5px;
  width: 100%;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 90%;
`;

export const Additional = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  padding: 20px;
`;

export const AdditionalImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  object-fit: cover;
`;

export const Footer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  bottom: 0;

  width: 60%;

  @media screen and (max-width: 800px) {
    width: 100%;
    position: relative;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const UserAvatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 100%;

  background: #ffe115;

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const ContainerBasicInfo = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

export const TextArea = styled.input`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;

  height: 100px;
  width: 380px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  padding: 20px;

  color: #000;

  background: ${Themes().background};
`;

export const ContainerPopUp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerPrint = styled.button`
  color: ${Themes().gray};

  background: transparent;
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: none;
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: ${Themes().gray};
    line-height: 14px;
    margin-left: 10px;
  }
`;

export const ContainerTitle = styled.div`
  color: #ffe115;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Back = styled(ArrowLeft)`
  @media screen and (min-width: 800px) {
    display: none;
  }

  margin-right: 20px;

  cursor: pointer;
`;

export const ContentIcons = styled.div`
  diplay: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
  align-items: center;
  ${({ zeroMargin }) =>
    !zeroMargin &&
    css`
      border-right: 1px solid ${Themes().gray};
    `}

  height: 100%;
`;

export const ContentChanges = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

export const TitleChange = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  margin-top: 25px;

  text-align: center;

  color: ${Themes().wordColors};
`;

export const SubTitleChange = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 25px;

  text-align: center;

  color: ${Themes().gray};
`;

export const ButtonChange = styled.div`
  background: #ffe115;
  height: 40px;
  width: 90%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  cursor: pointer;

  ${({ outline }) =>
    outline &&
    css`
      background: ${Themes().background};
      border: 1px solid #ffe115;
    `}

  > p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;

    text-align: center;

    color: #ffffff;

    ${({ outline }) =>
      outline &&
      css`
        color: #ffe115;
      `}
  }
`;

export const ContentBasicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const HeaderStatus = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  background: ${Themes().background};

  padding: 0 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 75px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 290px;
`;

export const TitleStatus = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;

  color: ${Themes().wordColors};
`;

export const Status = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin: 4px 0;
  color: #dddddd;
`;

export const ButtonStatus = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  color: #ffe115;

  cursor: pointer;
`;

export const ContentTime = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;

  justify-content: center;
`;

export const RowTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`;

export const TimeText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  color: #dddddd;
`;
