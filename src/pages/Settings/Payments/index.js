import React from "react";
import Settings from "..";
import SettingsComponents from "../../../Components/SettingsComponents";
import { usePayments } from "./hooks";

import { Container, Content, Title, Grid, Label, Row, Text } from "./styles";

function Payments() {
  const [creditCards, debitCards, online, UpdateOrCreatePayment, setOnline] =
    usePayments();

  return (
    <Settings path="payments">
      <Container>
        <SettingsComponents defaultValue={true} title="Cartão de crédito">
          <Content>
            <Title>Bandeiras aceitas:</Title>
            <Grid>
              {creditCards.map((crc, index) => (
                <Row>
                  <label className="container">
                    {crc.active ? (
                      <input
                        onChange={() =>
                          UpdateOrCreatePayment(index, true, false)
                        }
                        type="checkbox"
                        defaultChecked="checked"
                      />
                    ) : (
                      <input
                        onChange={() =>
                          UpdateOrCreatePayment(index, true, false)
                        }
                        type="checkbox"
                      />
                    )}
                    <span className="checkmark" />
                  </label>
                  <Label>{crc.flag}</Label>
                </Row>
              ))}
            </Grid>
          </Content>
        </SettingsComponents>

        <SettingsComponents defaultValue={true} title="Cartão de débito">
          <Content>
            <Title>Bandeiras aceitas:</Title>
            <Grid>
              {debitCards.map((crc, index) => (
                <Row>
                  <label className="container">
                    {crc.active ? (
                      <input
                        onChange={() =>
                          UpdateOrCreatePayment(index, false, true)
                        }
                        type="checkbox"
                        defaultChecked="checked"
                      />
                    ) : (
                      <input
                        onChange={() =>
                          UpdateOrCreatePayment(index, false, true)
                        }
                        type="checkbox"
                      />
                    )}
                    <span className="checkmark" />
                  </label>
                  <Label>{crc.flag}</Label>
                </Row>
              ))}
            </Grid>
          </Content>
        </SettingsComponents>

        <SettingsComponents
          zeroMargin
          onChange={() => {
            setOnline(!online);
            UpdateOrCreatePayment(0, false, false);
          }}
          defaultValue={online}
          title="Pagamentos online"
        >
          <Content>
            <Text></Text>
            <a></a>
          </Content>
        </SettingsComponents>
      </Container>
    </Settings>
  );
}

export default Payments;
