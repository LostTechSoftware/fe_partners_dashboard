import styled from "styled-components";

import { Themes } from "../../utils/themes";

export const Container = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${Themes().background};

  > img {
    width: 500px;
    height: 500px;

    @media only screen and (max-width: 800px) {
      width: 300px;
      height: 300px;
    }
  }
`;

export const LinkHeader = styled.p`
  font-weight: 500;
  font-size: 15px;

  text-align: center;

  color: #dddddd;

  position: absolute;
  right: 10px;
  top: 10px;

  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }

  > a {
    font-weight: 500;
    font-size: 15px;

    text-align: center;

    color: #ffe115;

    @media only screen and (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

export const Text = styled.p`
  color: ${Themes().wordColors};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  text-align: center;

  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const SubText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  text-align: center;

  color: #dddddd;

  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    text-align: center;

    color: #dddddd;

    @media only screen and (max-width: 800px) {
      font-size: 15px;
    }

    > a {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;

      text-align: center;

      color: #ffe115;

      @media only screen and (max-width: 800px) {
        font-size: 12px;
      }
    }
  }
`;
