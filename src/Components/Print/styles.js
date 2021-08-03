import styled, { css } from "styled-components";

export const Header = styled.div`
  padding: 20px;
  text-align: center;

  > img {
    width: 90%;
    height: 60px;
  }
`;

export const Content = styled.div`
  padding: 10px 10px;

  > h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }

  > p {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
  }
`;

export const Row = styled.div`
  > p {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
  }

  > .title {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }

  display:flex;
  justify-content:space-between;

  padding: 10px 0px;

  ${({ padding, nontop }) =>
    padding && !nontop
      ? css`
          padding: 10px 10px;
        `
      : css`
          padding: 0px 10px;
        `}}
`;

export const RowAdditinal = styled.li`
  > p {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
  }

  > .title {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
  }

  display:flex;
  justify-content:space-between;

  padding: 10px 0px;

  ${({ padding }) =>
    padding &&
    css`
      padding: 20px 10px;
    `}}
`;

export const ContainerPayment = styled.div`
  border: 0.5px dashed #000000;
  padding: 5px;
  border-radius: 5px;

  > hr {
    border: 0.1px dashed #000000;
  }
`;

export const RestaurantName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  padding: 10px 0px;

  text-align: center;

  color: #000000;
`;
