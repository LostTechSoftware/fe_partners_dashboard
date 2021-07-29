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
import { Row, Label, Input, Content } from "./styles";
import PopUp from "../../../Components/PopUp";
import CustomizedSwitches from "../../../Components/CustomizedSwitches";
import { useHeader } from "./hooks";

function Header({ opened, remove, ChangeStatus, connecting }) {
  const [
    showTimePopUp,
    setShowTimePopUp,
    showTimeRemovePopUp,
    setShowTimeRemovePopUp,
    showOpenedPopUp,
    setShowOpenedPopUp,
    timeRemove,
    timeDelivery,
    updateDeliveryDelay,
    updateWithdrawalDelay,
  ] = useHeader();

  return (
    <>
      <HeaderStatus>
        <LeftContent>
          <TitleStatus>Status do estabelecimento</TitleStatus>
          <Status>
            {connecting && "Conectando"}
            {!connecting && (remove || opened) && "Aberto para "}
            {!connecting && !opened && !remove && "Fechado "}
            {!connecting && opened && "entrega "}
            {!connecting && opened && remove && "e "}
            {!connecting && remove && "retirada"}
          </Status>
          <ButtonStatus onClick={() => setShowOpenedPopUp(!showOpenedPopUp)}>
            Alterar
          </ButtonStatus>
        </LeftContent>
        <RightContent>
          <ContentTime>
            <TitleStatus>Tempo de retirada</TitleStatus>
            <RowTime>
              <TimeText>{timeRemove} min</TimeText>
              <ButtonStatus
                onClick={() => setShowTimeRemovePopUp(!showTimeRemovePopUp)}
              >
                Alterar
              </ButtonStatus>
            </RowTime>
          </ContentTime>

          <ContentTime>
            <TitleStatus>Tempo de entrega</TitleStatus>
            <RowTime>
              <TimeText>{timeDelivery} min</TimeText>
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
            onChange={() => ChangeStatus(remove, !opened)}
            checked={opened}
            width={80}
            height={35}
            switchSize={25}
          />
        </Row>

        <Row>
          <Label>Retirada</Label>
          <CustomizedSwitches
            onChange={() => ChangeStatus(!remove, opened)}
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
      >
        <Content>
          <Input
            placeholder="0 min"
            type="number"
            maxLength="3"
            onChange={(event) =>
              updateDeliveryDelay(event.target.value.slice(0, 3))
            }
            value={timeDelivery}
          />
        </Content>
      </PopUp>

      <PopUp
        show={showTimeRemovePopUp}
        showDefault={false}
        width="600px"
        height="280px"
        mobileHeight="280px"
        close={() => setShowTimeRemovePopUp(!showTimeRemovePopUp)}
        title="Tempo de retirada"
      >
        <Content>
          <Input
            placeholder="0 min"
            type="number"
            maxLength="3"
            onChange={(event) =>
              updateWithdrawalDelay(event.target.value.slice(0, 3))
            }
            value={timeRemove}
          />
        </Content>
      </PopUp>
    </>
  );
}

export default Header;
