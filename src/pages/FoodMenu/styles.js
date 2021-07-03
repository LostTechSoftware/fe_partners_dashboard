import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 90%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerButtons = styled.div`
  display: flex;
`;

export const ButtonHeader = styled.div`
  width: 171px;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.selected &&
    `  border-bottom: 5px solid #ffe115;
  `}
`;

export const ButtonText = styled.p`
  font-weight: 300;
  font-size: 15px;
`;

export const Selector = styled.select`
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;
  width: 170px;
  height: 35px;
`;

export const SearchBox = styled.input`
  background-color: #fcfcfc;
  border-radius: 5px;
  width: 342px;
  height: 43px;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;

  color: #dddddd;

  background: url("http://www.birds.com/wp-content/uploads/home/bird4.jpg")
    no-repeat scroll 7px 7px;
  padding-left: 30px;
`;

export const ContainerSelect = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;
