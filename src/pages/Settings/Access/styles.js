import styled, { css } from "styled-components";
import { Themes } from "../../../utils/themes";

export const GridView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;

  align-items: center;

  justify-content: space-between;

  background: ${Themes().background};
`;

export const Card = styled.div`
  border: 1px solid #dddddd;
  box-sizing: border-box;

  height: 130px;
  width: 40%;
  border-radius: 5px;

  display: flex;

  margin: 25px;

  @media screen and (max-width: 1200px) {
    width: 460px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const UserAvatar = styled.img`
  height: 99%;
  width: 130px;
  border-radius: 5px;

  background: ${({ background }) => background};
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 20px;
`;

export const Name = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 140.62%;

  display: flex;
  align-items: center;

  word-wrap: break-word;

  color: ${Themes().wordColors};
`;

export const Office = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 140.62%;

  display: flex;
  align-items: center;

  color: ${Themes().wordColors};

  margin-top: 5px;
`;

export const Email = styled.div`
  > p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    color: #dddddd;
    word-wrap: break-word;
  }

  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
  height: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  margin-top: 10px;
`;

export const AddProductButton = styled.div`
  height: 130px;
  width: 40%;
  margin: 25px;
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

export const Option = styled.option`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: ${Themes().wordColors};
`;

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;

  width: 50px;
`;
