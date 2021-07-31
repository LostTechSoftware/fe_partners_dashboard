import styled, { css } from "styled-components";
import { Themes } from "../../../utils/themes";

export const ThumbNail = styled.div`
  width: 100%;
  height: 250px;

  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${(props) => props.src});

  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffe115;

  > .row {
    display: none;

    transition: all 0.5s;
  }

  > p {
    display: none;

    transition: all 0.5s;
  }

  > svg {
    display: none;

    transition: all 0.5s;
  }

  > .opacity {
    position: absolute;

    transition: all 0.5s;

    width: 100%;
    height: 200px;
  }

  input {
    position: absolute;

    width: 100%;
    height: 250px;
    background: transparent;

    opacity: 0;
  }

  &:hover {
    .opacity {
      display: flex;
      position: absolute;
      background: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 250px;

      cursor: pointer;

      transition: all 0.5s;
    }

    .row {
      display: flex;
      cursor: pointer;

      position: absolute;

      transition: all 0.5s;
    }

    p {
      display: flex;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;

      display: flex;
      align-items: center;
      text-align: center;

      margin-left: 4px;

      color: #ffe115;

      transition: all 0.5s;

      @media screen and (max-width: 800px) {
        font-size: 12px;
      }
    }

    svg {
      display: flex;

      transition: all 0.5s;
    }
  }

  transition: all 0.5s;
`;

export const Logo2 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;

  margin-top: -60px;
  margin-left: 60px;

  position: absolute;

  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${(props) => props.src});

  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffe115;

  > .row {
    display: none;

    transition: all 0.5s;
  }

  > p {
    display: none;

    transition: all 0.5s;
  }

  > svg {
    display: none;

    transition: all 0.5s;
  }

  > .opacity {
    position: absolute;

    transition: all 0.5s;

    width: 140px;
    height: 140px;
    border-radius: 100px;
  }

  input {
    position: absolute;

    width: 100%;
    height: 250px;
    background: transparent;

    opacity: 0;
  }

  &:hover {
    width: 120px;
    height: 120px;

    .opacity {
      display: flex;
      position: absolute;
      background: rgba(0, 0, 0, 0.7);
      width: 120px;
      height: 120px;
      border-radius: 100px;

      cursor: pointer;

      transition: all 0.5s;
    }

    .row {
      display: flex;
      cursor: pointer;

      position: absolute;

      transition: all 0.5s;
    }

    p {
      display: flex;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;

      display: flex;
      align-items: center;
      text-align: center;

      margin-left: 4px;

      color: #ffe115;

      transition: all 0.5s;

      @media screen and (max-width: 800px) {
        font-size: 10px;
      }
    }

    svg {
      display: flex;

      transition: all 0.5s;
    }
  }

  transition: all 0.2s;
`;

export const GridInputs = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: ${Themes().background};

  padding: 40px 0px;
`;

export const InputName = styled.div`
  border-bottom: 1px solid ${Themes().gray};
  background: ${Themes().background};
  box-sizing: border-box;
  width: 100%;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};

  padding: 15px 0px;

  height: 48px;
`;

export const Input = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Label = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().gray};
`;

export const ContainerInput = styled.div`
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 90%;
  }

  ${(props) =>
    !props.zeroMargin &&
    css`
      margin-top: 20px;
    `}

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    `}

  ${(props) =>
    props.zeroMargin &&
    css`
      margin: 0;
    `}
`;

export const Container = styled.div`
  padding-top: 20px;

  height: 100%;

  > img {
    width: 100%;
    max-height: 60%;
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    margin-top: 20px;

    text-align: center;

    color: #dddddd;
  }
`;
