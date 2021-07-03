import React, { useEffect, useState } from "react";

import api from "../../services/api";
import {
  Container,
  Header,
  ContainerButtons,
  ButtonHeader,
  ButtonText,
  Selector,
  SearchBox,
  ContainerSelect,
} from "./styles";
import MainMenu from "../../Components/MainMenu";

export default function FoodMenu() {
  const [expectedItensName, setExpectedItensName] = useState("");
  const [itensList, setItensList] = useState([]);

  useEffect(() => {
    async function getItens() {
      if (!expectedItensName) {
        const response = await api.get(`/menu/restaurant/get`);

        setItensList(response.data);
      } else {
        const response = await api.get(`/search/${expectedItensName}`);

        setItensList(response.data);
      }
    }

    getItens();
  }, [expectedItensName]);

  return (
    <>
      <div className="page foodMenu">
        <MainMenu currentPage="menu" />
        <Container>
          <Header>
            <ContainerButtons>
              <ButtonHeader selected={true}>
                <ButtonText>Entrega</ButtonText>
              </ButtonHeader>

              <ButtonHeader>
                <ButtonText>Retirada</ButtonText>
              </ButtonHeader>
            </ContainerButtons>

            <ContainerSelect>
              <Selector />
            </ContainerSelect>

            <ContainerSelect>
              <SearchBox placeholder="Pesquise igredientes ou produtos"></SearchBox>
            </ContainerSelect>
          </Header>
        </Container>
      </div>
    </>
  );
}
