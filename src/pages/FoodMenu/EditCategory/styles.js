import styled from "styled-components";

export const Container = styled.div``;

export const ButtonContainer = styled.div`
  background-color: #fff;
  color: #ffe115;
  margin-left: 5px;
  cursor: pointer;
  ${(props) =>
    props.background &&
    `
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

  ${(props) =>
    props.full &&
    `
    width:80%;
    margin-top: 10px;

    justify-content: center;
  `}
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
    `
    color:#fff;
    margin-left: 15px;
    `}
`;

export const ButtonsHeaderContainer = styled.div`
  display: flex;
`;

export const ContainerPadding = styled.div`
  padding: 40px;
`;

export const RightComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerAdditional = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1638px) {
    justify-content: center;
  }
`;

export const Additional = styled.div`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;

  width: 170px;
  height: 70px;

  @media screen and (max-width: 472px) {
    width: 100%;
  }

  @media screen and (min-width: 801px) {
    width: 100%;
  }

  @media screen and (min-width: 1170px) {
    width: 200px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  margin: 10px;
`;

export const AdditionalAvatar = styled.img`
  border-radius: 5px;
  height: 100%;
  width: 40%;
  object-fit: cover;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

export const TitleAdditional = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  line-height: 14px;

  color: #000000;
`;

export const Price = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #dddddd;
`;

export const AddAdditional = styled.div`
  width: 170px;
  height: 70px;

  @media screen and (max-width: 472px) {
    width: 100%;
  }

  @media screen and (min-width: 801px) {
    width: 100%;
  }

  @media screen and (min-width: 1170px) {
    width: 170px;
  }

  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  color: #ffe115;
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  text-align: center;

  color: #ffe115;
`;

export const ContainerCenter = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleEmpty = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  color: #dddddd;
`;
