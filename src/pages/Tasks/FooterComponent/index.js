import React from "react";

import {
  ContainerButtons,
  Button,
  TextButton,
  ContainerPrice,
  Row,
  Label,
  Value,
  ContainerSend,
} from "./styles";
import { useFooterComponent } from "./hooks";

function FooterComponent({ order, setShowPopup }) {
  const [paymentMethod, deliveryOrder, acceptOrder] = useFooterComponent({
    order,
  });

  switch (order.status) {
    case "Aguardando aprovação":
      return (
        <ContainerButtons>
          <Button onClick={setShowPopup} half outline>
            <TextButton outline>Recusar</TextButton>
          </Button>
          <Button half onClick={acceptOrder}>
            <TextButton>Aceitar</TextButton>
          </Button>
        </ContainerButtons>
      );
    case "Aceito":
      return (
        <ContainerButtons>
          <ContainerPrice>
            <Row>
              <Label>Valor da compra</Label>
              <Value>
                {order.realPrice.toLocaleString("pt-br", {
                  currency: "brl",
                  style: "currency",
                })}
              </Value>
            </Row>

            {order.coupm ? (
              <Row margin>
                <Label>Cupom</Label>
                <Value>
                  {order.coupm.toLocaleString("pt-br", {
                    currency: "brl",
                    style: "currency",
                  })}
                </Value>
              </Row>
            ) : null}

            <hr />

            <Row>
              <Label>{paymentMethod}</Label>
              <Value>
                {order.price.toLocaleString("pt-br", {
                  currency: "brl",
                  style: "currency",
                })}
              </Value>
            </Row>
          </ContainerPrice>

          <ContainerSend>
            {order.change ? (
              <Row margin>
                <Label>Troco para</Label>
                <Value>
                  {order.change.toLocaleString("pt-br", {
                    currency: "brl",
                    style: "currency",
                  })}
                </Value>
              </Row>
            ) : null}
            <Button onClick={deliveryOrder}>
              <TextButton>Mandar para entrega</TextButton>
            </Button>
          </ContainerSend>
        </ContainerButtons>
      );
    case "Enviado":
      return (
        <ContainerButtons>
          <ContainerPrice>
            <Row>
              <Label>Valor da compra</Label>
              <Value>
                {order.realPrice.toLocaleString("pt-br", {
                  currency: "brl",
                  style: "currency",
                })}
              </Value>
            </Row>

            {order.coupm ? (
              <Row margin>
                <Label>Cupom</Label>
                <Value>
                  {order.coupm.toLocaleString("pt-br", {
                    currency: "brl",
                    style: "currency",
                  })}
                </Value>
              </Row>
            ) : null}

            <hr />

            <Row>
              <Label>{paymentMethod}</Label>
              <Value>
                {order.price.toLocaleString("pt-br", {
                  currency: "brl",
                  style: "currency",
                })}
              </Value>
            </Row>
          </ContainerPrice>
        </ContainerButtons>
      );
    default:
      return <p />;
  }
}

export default FooterComponent;
