import React from "react";
import GoogleMapReact from "google-map-react";
import { Home, Navigation2 } from "react-feather";

import MainMenu from "../../Components/MainMenu";
import { useScreenMeasure } from "../../utils/isMobile";
import { useLocalization } from "./hooks";
import {
  Container,
  InfoContainer,
  MapContainer,
  PartnerComponent,
  OrdersComponent,
  ContainerLegend,
  Row,
  DeliveryManComponent,
  Image,
  Title,
  Info,
  ContentInfo,
  BottomButton,
  BottomLabel,
} from "./styles";

function Localization() {
  const [isMobile] = useScreenMeasure();
  const [
    isMenuMobileOpened,
    handleMenuMobileOpen,
    restaurantLocation,
    orders,
    showInfo,
    setShowInfo,
    selectedInfo,
    setSelectedInfo,
  ] = useLocalization();

  return (
    <div className="page foodMenu">
      <MainMenu
        isMenuMobileOpened={isMenuMobileOpened}
        onClick={handleMenuMobileOpen}
        currentPage="maps"
      />
      <Container isMobile={isMobile}>
        <InfoContainer showInfo={!showInfo}>
          {selectedInfo && (
            <>
              <Image
                src={`https://avatars.dicebear.com/api/micah/${selectedInfo.user.name}.svg`}
              />

              <Title>#{selectedInfo.token}</Title>

              <ContentInfo>
                <Info>Nome: {selectedInfo.user.name}</Info>
                <Info>
                  Endereço: {selectedInfo.address.street},
                  {selectedInfo.address.Number}
                </Info>
                <Info>Bairro: {selectedInfo.address.neighborhood}</Info>
              </ContentInfo>

              <Title>Concluído</Title>

              <ContentInfo>
                <Info>Entregador: Anderson Silva</Info>
                <Info>Quilômetros percorridos: 24</Info>
                <Info>Horário de conclusão: 22:46</Info>
                <Info>
                  Valor:{" "}
                  {selectedInfo.realPrice.toLocaleString("pt-br", {
                    currency: "brl",
                    style: "currency",
                  })}
                </Info>
              </ContentInfo>

              {/* <BottomButton onClick={() => console.log("oijasod")}>
                <BottomLabel>Ver destino</BottomLabel>
              </BottomButton> */}
            </>
          )}
        </InfoContainer>
        <MapContainer showInfo={showInfo && selectedInfo}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_KEY,
            }}
            defaultCenter={{
              lat: restaurantLocation[1],
              lng: restaurantLocation[0],
            }}
            defaultZoom={18}
          >
            <PartnerComponent
              //   onClick={() => setShowInfo(!showInfo)}
              lat={restaurantLocation[1]}
              lng={restaurantLocation[0]}
            >
              <Home />
            </PartnerComponent>

            {orders.map((order) => (
              <OrdersComponent
                onClick={() => {
                  setShowInfo(!showInfo);
                  setSelectedInfo(order);
                }}
                lat={order.address.location.coordinates[1]}
                lng={order.address.location.coordinates[0]}
                deliveried={order.completed}
              >
                <Home />
              </OrdersComponent>
            ))}
          </GoogleMapReact>
        </MapContainer>

        <ContainerLegend>
          <Row>
            <OrdersComponent deliveried={true}>
              <Home />
            </OrdersComponent>

            <p>Entregas concluídas</p>
          </Row>

          <Row>
            <OrdersComponent deliveried={false}>
              <Home />
            </OrdersComponent>

            <p>Entregas pendentes</p>
          </Row>

          <Row>
            <DeliveryManComponent>
              <Navigation2 />
            </DeliveryManComponent>

            <p>Entregadores</p>
          </Row>

          <Row>
            <PartnerComponent>
              <Home />
            </PartnerComponent>

            <p>Estabelecimento</p>
          </Row>
        </ContainerLegend>
      </Container>
    </div>
  );
}

export default Localization;
