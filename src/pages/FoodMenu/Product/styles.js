import styled from "styled-components";
import { Themes } from "../../../utils/themes";

export const Container = styled.div`
  flex-wrap: wrap;
  display: flex;

  @media screen and (max-width: 1450px) {
    justify-content: center;
  }
`;

export const ProductContainer = styled.div`
  width: 190px;
  height: 240px;
  margin: 15px;

  @media screen and (max-width: 505px) {
    width: 150px;
  }

  @media screen and (max-width: 425px) {
    width: 80%;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    margin: 0;
    margin-top: 10px;
  }

  border-radius: 5px;
  border: 1px solid #dddddd;
  cursor: pointer;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 60%;
  background-size: cover;
  border-radius: 5px;

  @media screen and (max-width: 425px) {
    background-size: cover;
  }

  color: #fff;

  display: flex;
  justify-content: flex-end;

  align-items: flex-end;

  flex-direction: column;

  padding: 8px;

  background-repeat: no-repeat;
  background-image: linear-gradient(
      225deg,
      rgb(0 0 0 / 23%) 0%,
      rgba(0, 0, 0, 0) 46.61%,
      rgba(0, 0, 0, 0) 50%
    ),
    url(${(props) => props.url});
`;

export const ProductTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  margin-top: 15px;
  color: ${Themes().wordColors};

  @media screen and (max-width: 425px) {
    margin-top: 10px;
  }
`;

export const ProductBottom = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  align-items: center;
  padding: 0 15px;
  margin-top: 10px;
`;

export const ProductPrice = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  color: #dddddd;
`;

export const ProductOldPrice = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140.62%;

  text-decoration: line-through;
  color: #dddddd;
`;

export const AddProductButton = styled.div`
  width: 190px;
  height: 240px;
  margin: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
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

export const ButtonContainer = styled.div`
  width: 100%;
  height: 90%;
`;

export const Button = styled.div`
  height: 100%;
`;
