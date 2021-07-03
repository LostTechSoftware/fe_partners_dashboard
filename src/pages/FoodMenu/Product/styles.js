import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  display: flex;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const ProductContainer = styled.div`
  width: 190px;
  height: 240px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  margin: 15px;
  cursor: pointer;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 60%;
  background-size: contain;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      225deg,
      rgba(0, 0, 0, 0.3) 0%,
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
`;

export const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
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
