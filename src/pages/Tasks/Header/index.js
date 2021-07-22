import React from "react";

import {
  HeaderStatus,
  LeftContent,
  RightContent,
  TitleStatus,
  Status,
  ButtonStatus,
  ContentTime,
  RowTime,
  TimeText,
} from "../styles";

function Header() {
  return (
    <HeaderStatus>
      <LeftContent>
        <TitleStatus>Status do estabelecimento</TitleStatus>
        <Status>Aberto para entrega e retirada</Status>
        <ButtonStatus>Alterar</ButtonStatus>
      </LeftContent>
      <RightContent>
        <ContentTime>
          <TitleStatus>Tempo de retirada</TitleStatus>
          <RowTime>
            <TimeText>10 min</TimeText>
            <ButtonStatus>Alterar</ButtonStatus>
          </RowTime>
        </ContentTime>

        <ContentTime>
          <TitleStatus>Tempo de entrega</TitleStatus>
          <RowTime>
            <TimeText>10 min</TimeText>
            <ButtonStatus>Alterar</ButtonStatus>
          </RowTime>
        </ContentTime>
      </RightContent>
    </HeaderStatus>
  );
}

export default Header;
