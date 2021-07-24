import React from "react";

import { useScreenMeasure } from "../../utils/isMobile";
import { useTasks } from "./hooks";
import { Container, OrdersList, OrderDetails } from "./styles";
import MainMenu from "../../Components/MainMenu";
import "./styles.css";
import OrderListComponent from "./OrderListComponent";
import OrderDetailsComponent from "./OrderDetailsComponent";
import SoundComponent from "./SoundComponent";
import Header from "./Header";

export default function Tasks() {
  const [
    isMenuMobileOpened,
    handleMenuMobileOpen,
    screen,
    setScreen,
    orders,
    newOrders,
    selectedOrders,
    setSelectedOrders,
    loading,
    Collapse,
    SendReason,
    showPopup,
    setShowPopup,
    reason,
    setReason,
    showOrderDetails,
    setShowOrderDetails,
    toggleMenu,
    setToggleMenu,
    restaurantIsOpen,
    removeOption,
    ChangeStatus,
    connecting,
  ] = useTasks();
  const [isMobile] = useScreenMeasure();

  return (
    <div className="page foodMenu">
      <SoundComponent newOrders={newOrders} />
      <MainMenu
        isMenuMobileOpened={isMenuMobileOpened}
        onClick={handleMenuMobileOpen}
        currentPage="requests"
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
      />
      <Container isMobile={isMobile}>
        <OrdersList toggleMenu={toggleMenu} showOrderDetails={showOrderDetails}>
          <OrderListComponent
            setScreen={setScreen}
            screen={screen}
            orders={orders}
            loading={loading}
            setSelectedOrders={setSelectedOrders}
            showOrderDetails={showOrderDetails}
            setShowOrderDetails={setShowOrderDetails}
          />
        </OrdersList>

        <OrderDetails
          showOrderDetails={showOrderDetails}
          toggleMenu={toggleMenu}
        >
          <OrderDetailsComponent
            Collapse={Collapse}
            selectedOrders={selectedOrders}
            showPopup={showPopup}
            SendReason={SendReason}
            setReason={setReason}
            reason={reason}
            setShowPopup={setShowPopup}
            setShowOrderDetails={setShowOrderDetails}
          />
        </OrderDetails>

        <Header
          connecting={connecting}
          opened={restaurantIsOpen}
          remove={removeOption}
          ChangeStatus={ChangeStatus}
        />
      </Container>
    </div>
  );
}
