import React from "react";
import { Search, Plus, Sliders, Edit2, Pause } from "react-feather";

import {
  Container,
  Header,
  ContainerButtons,
  ButtonHeader,
  ButtonText,
  Selector,
  SearchBox,
  ContainerSelect,
  Input,
  ContainerSearch,
  ContainerPadding,
  ButtonsHeaderContainer,
  ButtonContainer,
  TextButton,
  RowsProduct,
  Title,
  RightComponent,
  ButtonEdit,
  ButtonPause,
  TitleButton,
} from "./styles";
import MainMenu from "../../Components/MainMenu";
import Product from "./Product";
import AddProduct from "./AddProduct";
import { useMenu } from "./hooks";
import { useScreenMeasure } from "../../utils/isMobile";
import { LoadingSkeleton } from "../../Components/LoadingSkeleton";

export default function FoodMenu() {
  const [isMobile] = useScreenMeasure();
  const [
    modalIsOpened,
    setModalIsOpened,
    remove,
    setRemove,
    loading,
    setLoading,
  ] = useMenu();

  return (
    <>
      <div className="page foodMenu">
        <MainMenu currentPage="menu" />
        <Container disableScroll={modalIsOpened}>
          <Header>
            <ContainerButtons>
              <ButtonHeader onClick={() => setRemove(false)} selected={!remove}>
                <ButtonText>Entrega</ButtonText>
              </ButtonHeader>

              <ButtonHeader onClick={() => setRemove(true)} selected={remove}>
                <ButtonText>Retirada</ButtonText>
              </ButtonHeader>
            </ContainerButtons>

            <ContainerSelect>
              <Selector />
            </ContainerSelect>

            <ContainerSearch>
              <SearchBox>
                <Search />
                <Input placeholder="Pesquise igredientes ou produtos" />
              </SearchBox>
            </ContainerSearch>
          </Header>

          <ContainerPadding>
            <ButtonsHeaderContainer>
              <ButtonContainer background>
                <Plus size={30} />
                <TextButton background>
                  {isMobile ? "Adicionar" : "Adicionar categoria"}
                </TextButton>
              </ButtonContainer>

              <ButtonContainer>
                <Sliders />
                <TextButton>
                  {isMobile ? "Reorganizar" : "Reorganizar categorias"}
                </TextButton>
              </ButtonContainer>
            </ButtonsHeaderContainer>

            <RowsProduct>
              {loading ? (
                <LoadingSkeleton
                  isLoading={loading}
                  hasHeading
                  containerHeight="30px"
                  containerWidth={isMobile ? "70%" : "33%"}
                >
                  Hamburgueres
                </LoadingSkeleton>
              ) : (
                <Title>Hamburgueres</Title>
              )}
              <RightComponent>
                <ButtonEdit>
                  <Edit2 />
                  <TitleButton>
                    {isMobile ? "Editar" : "Editar categoria"}
                  </TitleButton>
                </ButtonEdit>

                <ButtonPause>
                  <Pause />
                  <TitleButton yellow>
                    {isMobile ? "Pausar" : "Pausar categoria"}
                  </TitleButton>
                </ButtonPause>
              </RightComponent>
            </RowsProduct>

            <Product action={() => setModalIsOpened(true)} />
          </ContainerPadding>

          {modalIsOpened && (
            <AddProduct cancel={() => setModalIsOpened(false)} />
          )}
        </Container>
      </div>
    </>
  );
}
