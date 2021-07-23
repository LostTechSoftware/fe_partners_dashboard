import React from "react";
import moment from "moment";

import { usePrint } from "./hooks";

import {
  Header,
  Content,
  Row,
  ContainerPayment,
  RowAdditinal,
  RestaurantName,
} from "./styles";
import "./styles.css";

export const Print = React.forwardRef((props, ref) => {
  const { order } = props;
  const [paymentMethod, restaurantName] = usePrint(order);

  return (
    <div ref={ref} className="print-media">
      <Header>
        <img src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Logos/FoodZilla.svg" />
      </Header>

      <RestaurantName>{restaurantName}</RestaurantName>

      <Content>
        <h1>Pedido #{order.token}</h1>
        <p>Feito às {moment(order.createdAt).format("HH:MM")}</p>
        <p>
          {order.removeOption
            ? "Retirada"
            : `Entregar até ${moment(order.createdAt)
                .add(60, "minutes")
                .format("HH:MM")}`}
        </p>
      </Content>

      <Content>
        <h1>Cliente</h1>
        <p>Nome: {order.user.name}</p>
        {!order.removeOption && (
          <>
            <p>
              Endereço: {order.address.street}, {order.address.Number}
            </p>
            <p>Bairro: {order.address.neighborhood}</p>
          </>
        )}
      </Content>

      <Content>
        <h1>Pedido</h1>
        {order.products.map((product) => (
          <>
            <Row>
              <p className="title">{product.title}</p>
              <p className="title">x{product.quantidade}</p>
              <p className="title">
                {(product.quantidade * product.price).toLocaleString("pt-br", {
                  currency: "brl",
                  style: "currency",
                })}
              </p>
            </Row>
            {product.additional && product.additional.length ? (
              <p>Adicionais:</p>
            ) : null}
            <ul>
              {product.additional &&
                product.additional.map((additional) => (
                  <RowAdditinal>
                    <p className="title">{additional.title}</p>
                    <p>x{additional.quantidade}</p>
                    <p>
                      {(
                        additional.quantidade * additional.price
                      ).toLocaleString("pt-br", {
                        currency: "brl",
                        style: "currency",
                      })}
                    </p>
                  </RowAdditinal>
                ))}
            </ul>
            {product.observation && <p>Observação: {product.observation}</p>}
          </>
        ))}
      </Content>

      <ContainerPayment>
        <Row>
          <p>Sub-total</p>
          <p>
            {order.realPrice.toLocaleString("pt-br", {
              currency: "brl",
              style: "currency",
            })}
          </p>
        </Row>

        <Row>
          <p>Cupom</p>
          <p>
            {order.couponUsed.toLocaleString("pt-br", {
              currency: "brl",
              style: "currency",
            })}
          </p>
        </Row>

        <hr />

        <Row>
          <p>Cobrar do cliente</p>
          <p>
            {order.price.toLocaleString("pt-br", {
              currency: "brl",
              style: "currency",
            })}
          </p>
        </Row>
      </ContainerPayment>

      <Row padding>
        <p>Método de pagamento:</p>
        <p>{paymentMethod}</p>
      </Row>

      <Row padding nontop>
        <p>Troco para:</p>
        <p>
          {order.change.toLocaleString("pt-br", {
            currency: "brl",
            style: "currency",
          })}
        </p>
      </Row>
    </div>
  );
});
