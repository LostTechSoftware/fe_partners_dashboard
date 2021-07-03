import styled from "styled-components";

export const Container = styled.div`
  background: white;
  right: 0;
  width: 40%;
  ${(props) =>
    props.isMobile &&
    `
    width: 100%;
  `}

  @media screen and (min-height: 800px) {
    bottom: 0;
  }

  position: absolute;
  top: 0;
  transition: 400ms ease;
  overflow-y: scroll;
`;

export const ClickOut = styled.div`
  left: 0;
  width: 60%;
  ${(props) =>
    props.isMobile &&
    `
    display: none;
  `}

  @media screen and (min-height: 800px) {
    bottom: 0;
  }

  position: absolute;
  top: 0;
  transition: 400ms ease;
`;

export const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-top: 20px;
`;

export const InputName = styled.input`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;

  ${(props) =>
    props.half &&
    `
    width: 90%;
  `}
  height: 35px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: rgba(0, 0, 0, 0.8);

  padding: 5px;
`;

export const InputPrice = styled.input`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;
  width: 50%;

  height: 35px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: rgba(0, 0, 0, 0.8);

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

  color: #dddddd;
`;

export const CaractersCount = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  text-align: right;

  color: #dddddd;
  width: 100%;
`;

export const ContainerInput = styled.div`
  width: 90%;
  margin-top: 20px;

  ${(props) =>
    props.half &&
    `
    width: 50%;
  `}

  ${(props) =>
    props.flex &&
    `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap
  `}
`;

export const Selector = styled.select`
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;
  width: 90%;
  height: 35px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 92px;
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: rgba(0, 0, 0, 0.8);

  padding: 5px;
`;

export const SubTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
`;

export const LabelCheckBox = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  margin-right: 10px;

  color: #ddd;
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
  padding: 20px 5%;
`;

export const BottomContainer = styled.div`
  position: absolute;
  right: 0;

  @media screen and (min-height: 874px) {
    ${(props) =>
      !props.isMobile &&
      `
      bottom: 0;
    `}
  }

  display: flex;
  background: #fff;
  width: 40%;

  ${(props) =>
    props.isMobile &&
    `
  width: 100%;
  `}
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
    props.selected &&
    `
  border: 1px solid #FFE115;
  box-sizing: border-box;
  background: #fff;
  `}

  margin: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

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

  color: ${(props) => (props.selected ? "#ffe115" : "#fff")};
`;

export const ContainerCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
