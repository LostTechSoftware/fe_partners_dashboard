import styled, { css } from "styled-components";
import { Themes } from "../../../utils/themes";

export const InputName = styled.input`
  border: 1px solid ${Themes().gray};
  background: ${Themes().background};
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;

  ${(props) =>
    props.half &&
    css`
      width: 90%;
    `}

  height: 35px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};

  padding: 5px;
`;

export const InputPrice = styled.input`
  border: 1px solid ${Themes().gray};
  box-sizing: border-box;
  border-radius: 5px;
  width: 50%;

  height: 35px;

  background: ${Themes().background};

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};

  padding: 5px;
`;

export const ContainerDropZone = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().gray};
`;

export const CaractersCount = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  text-align: right;

  color: ${Themes().gray};
  width: 100%;
`;

export const ContainerInput = styled.div`
  width: 90%;
  ${(props) =>
    !props.zeroMargin &&
    css`
      margin-top: 20px;
    `}

  ${(props) =>
    props.half &&
    css`
      width: 50%;
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

export const Selector = styled.select`
  background: ${Themes().background};
  border: 1px solid #dddddd;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};

  box-sizing: border-box;
  border-radius: 5px;
  width: ${(props) => (props.full ? "100%" : "90%")};
  height: 35px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 92px;
  background: ${Themes().background};
  border: 1px solid ${Themes().gray};
  box-sizing: border-box;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};

  padding: 5px;
`;

export const SubTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: ${Themes().wordColors};

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const LabelCheckBox = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  margin-right: 10px;

  color: ${Themes().gray};
`;

export const ContainerCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
`;

export const Separator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5% 0px 5%;
`;

export const GridDays = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5%;
  align-items: center;
  justify-content: center;
`;

export const BoxDay = styled.div`
  width: 120px;
  height: 50px;

  background: #ffe115;
  border-radius: 5px;

  ${(props) =>
    !props.selected &&
    css`
      border: 1px solid #ffe115;
      box-sizing: border-box;
      background: #fff;
    `}

  margin: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 100px;
    height: 40px;
  }
`;

export const DayName = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-transform: capitalize;

  color: ${(props) => (!props.selected ? "#ffe115" : "#fff")};
`;

export const ContainerCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
