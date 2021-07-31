import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Collapse as CollapseComponent } from "@material-ui/core";

import { ChevronDown, Printer } from "react-feather";
import moment from "moment";
import "moment/locale/pt-br";

import {
  BasicInfo,
  Title,
  Subtitle,
  Hour,
  ProductContainer,
  ProductText,
  Image,
  Collapsable,
  ContainerText,
  Additional,
  AdditionalImage,
  Footer,
  UserAvatar,
  ContainerBasicInfo,
  TextArea,
  ContainerPopUp,
  ContainerPrint,
  ContainerTitle,
  Back,
  ContentBasicInfo,
  Header,
} from "../styles";
import FooterComponent from "../FooterComponent";
import PopUp from "../../../Components/PopUp";
import { Print } from "../../../Components/Print";

function OrderDetailsComponent({
  selectedOrders,
  showPopup,
  SendReason,
  setReason,
  reason,
  setShowPopup,
  setShowOrderDetails,
  Collapse,
}) {
  const componentRef = useRef();

  return (
    <>
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
                        ? `${selectedOrders.address.street}, ${selectedOrders.address.Number}, ${selectedOrders.address.neighborhood}`
                        : "Retirada"}
                    </Hour>
                  </BasicInfo>
                  <ReactToPrint
                    trigger={() => (
                      <ContainerPrint>
                        <Printer />
                        <p>Imprimir pedido</p>
                      </ContainerPrint>
                    )}
                    content={() => componentRef.current}
                  />
                  <Print order={selectedOrders} ref={componentRef} />
                </ContentBasicInfo>
              </ContainerBasicInfo>
            ) : (
              <BasicInfo>
                <ContainerTitle>
                  <Back size={35} onClick={() => setShowOrderDetails(false)} />
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
                    onClick={() => Collapse(product._id)}
                    className={
                      product.showAdditionals
                        ? "arrow-transform-normal"
                        : "arrow-transform"
                    }
                    size={35}
                  />
                ) : null}
              </ProductContainer>
              {product.additional.length ? (
                <Collapsable>
                  <CollapseComponent
                    in={product.showAdditionals}
                    timeout="auto"
                    unmountOnExit
                  >
                    {product.additional.map((additionalRow) =>
                      additionalRow.additional.map((additional) => (
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
                      ))
                    )}
                  </CollapseComponent>
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
      {selectedOrders && (
        <Footer>
          <FooterComponent setShowPopup={setShowPopup} order={selectedOrders} />
        </Footer>
      )}
    </>
  );
}

export default OrderDetailsComponent;
