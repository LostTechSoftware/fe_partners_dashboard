import React from "react";
import { LoadingSkeleton } from "../../../Components/LoadingSkeleton";

import {
  AppBar,
  Tabs,
  Tab,
  OrderComponent,
  OrderCode,
  Value,
  LoadingContainer,
} from "../styles";

const renderLoading = () => {
  return (
    <LoadingContainer>
      <LoadingSkeleton
        isLoading
        hasHeading
        containerHeight="65px"
        containerWidth="100%"
      />
    </LoadingContainer>
  );
};

const Loading = ({ repeat = 1 }) => {
  return Array.from({ length: repeat }, () => renderLoading());
};

function OrderListComponent({
  orders,
  loading,
  setScreen,
  screen,
  selectedOrders,
  setSelectedOrders,
  setShowOrderDetails,
}) {
  return (
    <>
      <AppBar>
        <Tabs>
          <Tab onClick={() => setScreen(0)} selected={screen === 0}>
            Novos
          </Tab>
          <Tab onClick={() => setScreen(1)} selected={screen === 1}>
            Aceitos
          </Tab>
          <Tab onClick={() => setScreen(2)} selected={screen === 2}>
            Delivery
          </Tab>
        </Tabs>
      </AppBar>

      {loading && !orders.length && <Loading repeat={5} />}

      {orders.map((order) => (
        <OrderComponent
          selected={order._id === (selectedOrders && selectedOrders._id)}
          key={order._id}
          onClick={() => {
            setSelectedOrders(order);
            setShowOrderDetails(true);
            localStorage.setItem("selected_order_id", order._id);
          }}
        >
          <OrderCode>#{order.token}</OrderCode>
          <Value>
            {(screen === 0 ? order.realPrice : order.price).toLocaleString(
              "pt-br",
              {
                style: "currency",
                currency: "brl",
              }
            )}
          </Value>
        </OrderComponent>
      ))}
    </>
  );
}

export default OrderListComponent;
