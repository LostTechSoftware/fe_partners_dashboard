import React, { useRef } from "react";
import { Home, ChevronDown, Printer } from "react-feather";
import Sound from "react-sound";
import moment from "moment";
import MaterialIcon from "material-icons-react";
import "moment/locale/pt-br";
import ReactToPrint from "react-to-print";

import { useScreenMeasure } from "../../utils/isMobile";
import { useTasks } from "./hooks";
import {
  Container,
  OrdersList,
  OrderDetails,
  AppBar,
  Tabs,
  Tab,
  OrderComponent,
  OrderCode,
  Value,
  Header,
  BasicInfo,
  Title,
  Subtitle,
  Hour,
  StatusContent,
  Status,
  ProductContainer,
  ProductText,
  Image,
  Collapsable,
  ContainerText,
  Additional,
  AdditionalImage,
  Footer,
  LoadingContainer,
  UserAvatar,
  ContainerBasicInfo,
  TextArea,
  ContainerPopUp,
  ContainerPrint,
  ContainerTitle,
  Back,
  ContentIcons,
  ContentChanges,
  Row,
  TitleChange,
  SubTitleChange,
  ButtonChange,
  ContentBasicInfo,
  HeaderStatus,
} from "./styles";
import MainMenu from "../../Components/MainMenu";
import "./styles.css";
import { LoadingSkeleton } from "../../Components/LoadingSkeleton";
import FooterComponent from "./FooterComponent";
import PopUp from "../../Components/PopUp";
import Changes from "./Changes";
import { Print } from "../../Components/Print";

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
    status,
    color,
    ChangeStatus,
    showChange,
    setShowChange,
  ] = useTasks();
  const [isMobile] = useScreenMeasure();
  const componentRef = useRef();

  return (
    <div className="page foodMenu">
      {!newOrders.length ? (
        <Sound
          url="https://serverem.s3.us-east-2.amazonaws.com/old_telephone.mp3"
          loop={true}
          autoLoad={true}
          volume={100}
          playFromPosition={1000}
          playStatus={Sound.status.Paused}
        />
      ) : (
        <Sound
          url="https://serverem.s3.us-east-2.amazonaws.com/old_telephone.mp3"
          loop={true}
          autoLoad={true}
          volume={100}
          playFromPosition={1000}
          playStatus={Sound.status.PLAYING}
          autoPlay={true}
        />
      )}

      <MainMenu
        isMenuMobileOpened={isMenuMobileOpened}
        onClick={handleMenuMobileOpen}
        currentPage="requests"
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
      />
      <Container isMobile={isMobile}>
        <OrdersList toggleMenu={toggleMenu} showOrderDetails={showOrderDetails}>
          <AppBar>
            <Tabs>
              <Tab onClick={() => setScreen(0)} selected={screen === 0}>
                Novos
              </Tab>
              <Tab onClick={() => setScreen(1)} selected={screen === 1}>
                Aceitos
              </Tab>
              <Tab onClick={() => setScreen(2)} selected={screen === 2}>
                Em rota
              </Tab>
            </Tabs>
          </AppBar>

          {loading && <Loading repeat={5} />}

          {orders.map((order) => (
            <OrderComponent
              key={order._id}
              onClick={() => {
                setSelectedOrders(order);
                setShowOrderDetails(true);
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
        </OrdersList>

        <OrderDetails
          toggleMenu={toggleMenu}
          showOrderDetails={showOrderDetails}
        >
          {selectedOrders && (
            <>
              <Header>
                {selectedOrders.status !== "Aguardando aprovação" ? (
                  <ContainerBasicInfo>
                    <UserAvatar
                      src={`https://avatars.dicebear.com/api/micah/${selectedOrders.user.name}.svg`}
                    />
                    <ContentBasicInfo>
                      <BasicInfo>
                        <ContainerTitle>
                          <Back
                            size={35}
                            onClick={() => setShowOrderDetails(false)}
                          />
                          <Title>Pedido número #{selectedOrders.token}</Title>
                        </ContainerTitle>
                        <Subtitle>{selectedOrders.user.name}</Subtitle>
                        <Hour>
                          {selectedOrders.address
                            ? selectedOrders.address.street
                            : "Retirada"}
                        </Hour>
                      </BasicInfo>

                      <ContainerPrint onClick={() => window.print()}>
                        <Printer />
                        <p>Imprimir pedido</p>
                      </ContainerPrint>
                    </ContentBasicInfo>
                  </ContainerBasicInfo>
                ) : (
                  <BasicInfo>
                    <ContainerTitle>
                      <Back
                        size={35}
                        onClick={() => setShowOrderDetails(false)}
                      />
                      <Title>Pedido número #{selectedOrders.token}</Title>
                    </ContainerTitle>
                    <Subtitle>
                      {selectedOrders.removeOption ? "Retirada" : "Entrega"}
                    </Subtitle>
                    <Hour>
                      Feito {moment(selectedOrders.createdAt).format("LT")}
                    </Hour>
                  </BasicInfo>
                )}
              </Header>
              {selectedOrders.products.map((product) => (
                <>
                  <ProductContainer>
                    <Image
                      src={
                        product.avatar ||
                        "https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Doodle.jpg"
                      }
                    />

                    <ContainerText>
                      <ProductText>{product.title}</ProductText>
                      <ProductText>{product.quantidade}x</ProductText>
                      <ProductText>
                        {(product.quantidade * product.price).toLocaleString(
                          "pt-br",
                          {
                            currency: "brl",
                            style: "currency",
                          }
                        )}
                      </ProductText>
                    </ContainerText>

                    {product.additional.length ? (
                      <ChevronDown
                        onClick={Collapse}
                        className={
                          selectedOrders.showAdditionals
                            ? "arrow-transform-normal"
                            : "arrow-transform"
                        }
                        size={35}
                      />
                    ) : null}
                  </ProductContainer>
                  {product.additional.length &&
                  selectedOrders.showAdditionals ? (
                    <Collapsable>
                      {product.additional.additional.map((additional) => (
                        <Additional>
                          <AdditionalImage
                            src={
                              additional.avatar ||
                              "https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Doodle.jpg"
                            }
                          />

                          <ContainerText>
                            <ProductText>{additional.title}</ProductText>
                            <ProductText>{additional.quantidade}x</ProductText>
                            <ProductText>
                              {(
                                additional.quantidade * additional.price
                              ).toLocaleString("pt-br", {
                                currency: "brl",
                                style: "currency",
                              })}
                            </ProductText>
                          </ContainerText>
                        </Additional>
                      ))}
                    </Collapsable>
                  ) : null}
                </>
              ))}
            </>
          )}

          <PopUp
            title="Por que rejeitou o pedido?"
            show={showPopup}
            width="500px"
            height="350px"
            mobileHeight="350px"
            oneButton
            buttonLabel="Confirmar"
            onClick={SendReason}
          >
            <ContainerPopUp>
              <TextArea
                onChange={(event) => setReason(event.target.value)}
                value={reason}
                placeholder="Seu pedido foi rejeitado porque..."
              />
            </ContainerPopUp>
          </PopUp>

          <Footer>
            <FooterComponent
              setShowPopup={setShowPopup}
              order={selectedOrders}
            />
          </Footer>
        </OrderDetails>

        <Changes
          show={showChange}
          width="500px"
          height="200px"
          close={() => ChangeStatus()}
        >
          <ContentChanges>
            <Row>
              <TitleChange>Entrega</TitleChange>
              <SubTitleChange>
                {restaurantIsOpen ? "Aberto" : "Fechado"}
              </SubTitleChange>
              <ButtonChange
                onClick={() =>
                  ChangeStatus(true, removeOption, !restaurantIsOpen)
                }
              >
                <p>{`${
                  !restaurantIsOpen ? "Abrir" : "Fechar"
                } para entrega`}</p>
              </ButtonChange>
            </Row>
            <Row zeroMargin>
              <TitleChange>Retirada</TitleChange>
              <SubTitleChange>
                {removeOption ? "Aberto" : "Fechado"}
              </SubTitleChange>
              <ButtonChange
                outline
                onClick={() =>
                  ChangeStatus(true, !removeOption, restaurantIsOpen)
                }
              >
                <p>{`${!removeOption ? "Abrir" : "Fechar"} para retirada`}</p>
              </ButtonChange>
            </Row>
          </ContentChanges>
        </Changes>

        <HeaderStatus></HeaderStatus>
      </Container>
    </div>
  );
}
