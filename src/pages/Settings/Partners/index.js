import React from "react";
import { Copy } from "react-feather";

import Settings from "..";
import SettingsComponents from "../../../Components/SettingsComponents";
import { usePartnerSettings } from "./hooks";

import {
  Container,
  Row,
  Label,
  Input,
  Preview,
  RowTheme,
  Code,
  CodeContainer,
} from "./styles";

function Partners() {
  const [
    updateDeliveryDelay,
    updateWithdrawalDelay,
    settings,
    withdrawalDelay,
    deliveryDelay,
    updateSettingsFee,
  ] = usePartnerSettings();

  return (
    <Settings path="partners">
      <Container>
        <SettingsComponents defaultValue={true} showCheckBox={false} title="">
          <Row>
            <Label>Tempo de retirada (em mins)</Label>
            <Input
              value={withdrawalDelay}
              onChange={(event) => updateWithdrawalDelay(event.target.value)}
              placeholder="00"
            />
          </Row>

          <Row>
            <Label>Tempo de entrega (em mins)</Label>
            <Input
              value={deliveryDelay}
              onChange={(event) => updateDeliveryDelay(event.target.value)}
              placeholder="00"
            />
          </Row>
        </SettingsComponents>

        <SettingsComponents defaultValue={settings.fee} title="Taxa de entrega">
          <Row>
            <Label>1 quilômetro</Label>
            <Input
              onChange={(event) => updateSettingsFee(event.target.value, "km1")}
              value={settings.km1}
              placeholder="00,00"
            />
          </Row>

          <Row>
            <Label>3 quilômetros</Label>
            <Input
              onChange={(event) => updateSettingsFee(event.target.value, "km3")}
              value={settings.km3}
              placeholder="00,00"
            />
          </Row>

          <Row>
            <Label>5 quilômetros</Label>
            <Input
              onChange={(event) => updateSettingsFee(event.target.value, "km5")}
              value={settings.km5}
              placeholder="00,00"
            />
          </Row>

          <Row>
            <Label>7 quilômetros</Label>
            <Input
              onChange={(event) => updateSettingsFee(event.target.value, "km7")}
              value={settings.km7}
              placeholder="00,00"
            />
          </Row>

          <Row>
            <Label>9 quilômetros</Label>
            <Input
              onChange={(event) => updateSettingsFee(event.target.value, "km9")}
              value={settings.km9}
              placeholder="00,00"
            />
          </Row>
        </SettingsComponents>

        <SettingsComponents
          defaultValue={settings.openAutomaticaly}
          title="Abrir restaurante automaticamente ao entrar no aplicativo"
        />

        <SettingsComponents
          defaultValue={true}
          showCheckBox={false}
          title="Tema"
        >
          <RowTheme>
            <label className="container">
              {localStorage.getItem("theme") !== "dark" ? (
                <input
                  onChange={() => {
                    localStorage.setItem("theme", "light");
                    window.location.reload();
                  }}
                  type="checkbox"
                  defaultChecked="checked"
                />
              ) : (
                <input
                  onChange={() => {
                    localStorage.setItem("theme", "light");
                    window.location.reload();
                  }}
                  type="checkbox"
                />
              )}
              <span className="checkmark" />
            </label>
            <Label>Padrão</Label>
          </RowTheme>
          <RowTheme>
            <Preview src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Light+preview+order.png" />
            <Preview
              margin
              src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Light+preview+messages.png"
            />
          </RowTheme>

          <RowTheme>
            <label className="container">
              {localStorage.getItem("theme") === "dark" ? (
                <input
                  onChange={() => {
                    localStorage.setItem("theme", "dark");
                    window.location.reload();
                  }}
                  type="checkbox"
                  defaultChecked="checked"
                />
              ) : (
                <input
                  onChange={() => {
                    localStorage.setItem("theme", "dark");
                    window.location.reload();
                  }}
                  type="checkbox"
                />
              )}
              <span className="checkmark" />
            </label>
            <Label>Escuro</Label>
          </RowTheme>
          <RowTheme>
            <Preview src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Dark+preview+orders.png" />
            <Preview
              margin
              src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Dark+preview+messages.png"
            />
          </RowTheme>
        </SettingsComponents>

        <SettingsComponents
          defaultValue={true}
          showCheckBox={false}
          zeroMargin
          title="Integração"
        >
          <Label>
            Utilize esse código para integrar o FoodZilla à outros aplicativos
          </Label>
          <CodeContainer>
            <Code>
              <p>{settings.token}</p>
            </Code>
            <Copy
              onClick={() => navigator.clipboard.writeText(settings.token)}
              color="#ddd"
              size={25}
            />
          </CodeContainer>
        </SettingsComponents>
      </Container>
    </Settings>
  );
}

export default Partners;
