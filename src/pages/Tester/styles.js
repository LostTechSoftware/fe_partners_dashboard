import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  > .containerText {
    margin-top: 50px;
    text-align: center;

    padding: 0 20px;

    @media (max-width: 800px) {
      margin-top: 20px;
      text-align: left;
    }
  }
`;

export const Logo = styled.img`
  width: 40%;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;

  justify-content: space-between;

  padding: 0 20px;

  > p {
    margin-left: 20px;
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;

  text-align: center;

  color: #dddddd;

  margin-top: 20px;
`;
