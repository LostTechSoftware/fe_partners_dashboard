import styled, { css } from "styled-components";
import { Themes } from "../../utils/themes";

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

export const InfoContainer = styled.div`
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

  padding: 25px 0;

  ${({ showInfo }) =>
    showInfo &&
    css`
      display: none;
    `}
`;

export const MapContainer = styled.div`
  height: 100%;
  width: 60%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  ${({ showInfo }) =>
    !showInfo &&
    css`
      width: 100%;
    `}
`;

export const PartnerComponent = styled.div`
  width: 35px;
  height: 35px;

  background: #ffe115;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
`;

export const OrdersComponent = styled.div`
  width: 35px;
  height: 35px;

  background: ${({ deliveried }) => (deliveried ? "#2ECC71" : "#A6A6A6")};
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
`;

export const DeliveryManComponent = styled.div`
  width: 35px;
  height: 35px;

  background: #ffe115;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
`;

export const ContainerLegend = styled.div`
  position: absolute;
  width: 230px;
  height: 243px;
  right: 20px;
  top: 20px;

  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  padding: 0 10px;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 50px;

  > p {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;

    color: #000000;

    margin-left: 20px;
  }
`;

export const Image = styled.img`
  width: 60%;
  height: 200px;
  border-radius: 5px;

  background: #d74d43;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: ${Themes().wordColors};

  margin-top: 35px;
`;

export const Info = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;

  color: ${Themes().wordColors};

  margin-top: 20px;
`;

export const ContentInfo = styled.div`
  width: 100%;
  padding: 0 130px;

  margin-top: 20px;
`;

export const BottomButton = styled.div`
  background: #ffe115;
  border-radius: 5px;
  width: 320px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  position: absolute;
  bottom: 20px;

  ${(props) =>
    props.outline &&
    css`
      border: 1px solid #ffe115;
      box-sizing: border-box;
      background: ${Themes().background};
      border-radius: 5px;
    `}

  ${(props) =>
    props.disabled &&
    css`
      box-sizing: border-box;
      border: 0;
      background: #ddd;
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
    css`
      color: #ffe115;
    `}

  ${(props) =>
    props.disabled &&
    css`
      color: #fff;
    `}
`;
