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
import { Row, Label } from "./styles";
import PopUp from "../../../Components/PopUp";
import CustomizedSwitches from "../../../Components/Checkbox";
import { useHeader } from "./hooks";

function Header() {
  const [
    opened,
    setOpened,
    remove,
    setRemove,
    showTimePopUp,
    setShowTimePopUp,
    showTimeRemovePopUp,
    setShowTimeRemovePopUp,
    showOpenedPopUp,
    setShowOpenedPopUp,
  ] = useHeader();

  return (
    <>
      <HeaderStatus>
        <LeftContent>
          <TitleStatus>Status do estabelecimento</TitleStatus>
          <Status>Aberto para entrega e retirada</Status>
          <ButtonStatus onClick={() => setShowOpenedPopUp(!showOpenedPopUp)}>
            Alterar
          </ButtonStatus>
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
              <ButtonStatus onClick={() => setShowTimePopUp(!showTimePopUp)}>
                Alterar
              </ButtonStatus>
            </RowTime>
          </ContentTime>
        </RightContent>
      </HeaderStatus>

      <PopUp
        show={showOpenedPopUp}
        showDefault={false}
        title="Aberto para"
        width="600px"
        height="280px"
        mobileHeight="280px"
        close={() => setShowOpenedPopUp(!showOpenedPopUp)}
      >
        <Row>
          <Label>Entrega</Label>
          <CustomizedSwitches
            onChange={() => setOpened(!opened)}
            checked={opened}
            width={80}
            height={35}
            switchSize={25}
          />
        </Row>

        <Row>
          <Label>Retirada</Label>
          <CustomizedSwitches
            onChange={() => setRemove(!remove)}
            checked={remove}
            width={80}
            height={35}
            switchSize={25}
          />
        </Row>
      </PopUp>
      <PopUp
        show={showTimePopUp}
        showDefault={false}
        width="600px"
        height="280px"
        mobileHeight="280px"
        close={() => setShowTimePopUp(!showTimePopUp)}
        title="Tempo de entrega"
      ></PopUp>

      {/* <PopUp
      show={true}
      title="Tempo de retirada"
      width="600px"
      height="280px"
    ></PopUp> */}
    </>
  );
}

export default Header;
