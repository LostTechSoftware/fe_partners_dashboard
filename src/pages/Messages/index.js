import React from "react";
import { Search, Phone } from "react-feather";
import moment from "moment";
import "moment/locale/pt-br";

import {
  Container,
  MessagesList,
  SearchBox,
  Input,
  ContainerSearch,
  MessageComponent,
  Image,
  OrderCode,
  Hour,
  ContainerAvatar,
  HeaderMessage,
  MessageDetails,
  ScrollableArea,
  Footer,
  InputMessage,
  Send,
  LeftMessage,
  RightMessage,
  LeftContent,
  RightContent,
  Back,
} from "./styles";

import MainMenu from "../../Components/MainMenu";
import { useMessage } from "./hooks";
import { Themes } from "../../utils/themes";
import { useScreenMeasure } from "../../utils/isMobile";

export default function Message() {
  const [
    isMenuMobileOpened,
    handleMenuMobileOpen,
    messages,
    orders,
    selectedMessage,
    setSelectedMessage,
    restaurantId,
    message,
    setMessage,
    sendMessage,
    setMessages,
    setChat,
    showMessageDetails,
    setShowMessageDetails,
    setSearch,
  ] = useMessage();
  const [isMobile] = useScreenMeasure();

  return (
    <div className="page foodMenu">
      <MainMenu
        isMenuMobileOpened={isMenuMobileOpened}
        onClick={handleMenuMobileOpen}
        currentPage="messages"
      />
      <Container isMobile={isMobile}>
        <MessagesList showMessageDetails={showMessageDetails}>
          <ContainerSearch>
            <SearchBox>
              <Search />
              <Input
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Procurar conversa"
              />
            </SearchBox>
          </ContainerSearch>
          {orders.map((order) => (
            <MessageComponent
              onClick={() => {
                setMessages([]);
                setChat("");
                setShowMessageDetails(true);
                setSelectedMessage(order);
              }}
            >
              <ContainerAvatar>
                <Image
                  src={`https://avatars.dicebear.com/api/micah/${order.user.name}.svg`}
                />
                <OrderCode>#{order.token}</OrderCode>
              </ContainerAvatar>
              <Hour>
                {selectedMessage._id === order._id
                  ? moment(messages[0]?.time || orders.createdAt).format("LT")
                  : moment(orders.createdAt).format("LT")}
              </Hour>
            </MessageComponent>
          ))}
        </MessagesList>
        <MessageDetails showMessageDetails={showMessageDetails}>
          {selectedMessage && (
            <>
              <HeaderMessage>
                <Back
                  onClick={() => setShowMessageDetails(!showMessageDetails)}
                  color="#ffe115"
                  size={40}
                />

                <ContainerAvatar>
                  <Image
                    src={`https://avatars.dicebear.com/api/micah/${selectedMessage.user.name}.svg`}
                  />
                  <OrderCode>Pedido número #{selectedMessage.token}</OrderCode>
                </ContainerAvatar>

                <Phone color={Themes().gray} />
              </HeaderMessage>
              <ScrollableArea>
                {messages.map((message) => (
                  <>
                    {message.chatInfo.id === restaurantId ? (
                      <LeftContent>
                        <LeftMessage>{message.content}</LeftMessage>
                      </LeftContent>
                    ) : (
                      <RightContent>
                        <RightMessage>{message.content}</RightMessage>
                      </RightContent>
                    )}
                  </>
                ))}
              </ScrollableArea>

              <Footer onSubmit={sendMessage}>
                <InputMessage
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Escreva sua mensagem aqui..."
                />
                <Send onClick={sendMessage} color={Themes().gray} size={35} />
              </Footer>
            </>
          )}
        </MessageDetails>
      </Container>
    </div>
  );
}
