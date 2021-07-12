import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";
import { Navigation2, ArrowLeft } from "react-feather";

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

export const MessagesList = styled.div`
  height: 100%;
  width: 40%;
  background: ${Themes().messageBars};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  overflow-y: auto;
  overflow-x: hidden;

  ${({ showMessageDetails }) =>
    showMessageDetails &&
    css`
      @media screen and (max-width: 800px) {
        display: none;
      }
    `}
`;

export const Input = styled.input`
  background-color: transparent;

  width: 85%;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;

  color: ${Themes().wordColors};
`;

export const SearchBox = styled.div`
  background-color: ${Themes().menuBars};
  border-radius: 5px;
  width: 90%;
  height: 43px;
  color: ${Themes().gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ContainerSearch = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const MessageComponent = styled.div`
  width: 90%;
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

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const OrderCode = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 14px;

  color: ${Themes().wordColors};

  margin-left: 20px;
`;

export const Hour = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;

  color: ${Themes().gray};
`;

export const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderMessage = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0px 15px;

  border-bottom: 1px solid ${Themes().gray};
`;

export const MessageDetails = styled.div`
  height: 100%;
  width: 60%;

  ${({ showMessageDetails }) =>
    !showMessageDetails &&
    css`
      @media screen and (max-width: 800px) {
        display: none;
      }
    `}

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ScrollableArea = styled.div`
  height: 90%;
  width: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 100px;
`;

export const Footer = styled.form`
  width: 60%;
  height: 70px;
  background: ${Themes().messageBars};
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0px 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const InputMessage = styled.input`
  width: 90%;
  color: ${Themes().wordColors};
  background: transparent;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
`;

export const Send = styled(Navigation2)`
  transform: rotate(90deg);
  cursor: pointer;
`;

export const LeftMessage = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;

  color: ${Themes().wordColors};

  max-width: 50%;

  background-color: rgba(221, 221, 221, 0.3);
  border-radius: 5px 5px 5px 0px;
  padding: 10px;
`;

export const RightMessage = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;

  max-width: 50%;

  color: ${Themes().wordColors};

  background-color: ${Themes().messageComponent};
  border-radius: 5px 5px 0px 5px;
  padding: 10px;
`;

export const LeftContent = styled.div`
  background: transparent;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 10px;
`;

export const RightContent = styled.div`
  background: transparent;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  padding: 10px;
`;

export const Back = styled(ArrowLeft)`
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
