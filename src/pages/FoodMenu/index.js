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
import AddCategory from "./AddCategory";
import AddAdditional from "./AddAdditional";
import EditCategory from "./EditCategory";

export default function FoodMenu() {
  const [isMobile] = useScreenMeasure();
  const [
    setAddCategory,
    setAddProduct,
    remove,
    setRemove,
    loading,
    addProduct,
    addCategory,
    addAdditional,
    setAddAdditional,
    isMenuMobileOpened,
    handleMenuMobileOpen,
    editCategory,
    setEditCategory,
    ClickAdd,
  ] = useMenu();

  return (
    <>
      <div className="page foodMenu">
        <MainMenu
          isMenuMobileOpened={isMenuMobileOpened}
          onClick={handleMenuMobileOpen}
          currentPage="menu"
        />
        <Container
          isMobile={isMobile}
          disableScroll={
            addProduct ||
            addCategory ||
            isMenuMobileOpened ||
            editCategory ||
            addAdditional
          }
        >
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
              <ButtonContainer onClick={() => setAddCategory(true)} background>
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
                <ButtonEdit onClick={() => setEditCategory(true)}>
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

            <Product action={() => setAddProduct(true)} />
          </ContainerPadding>

          {addProduct && <AddProduct cancel={() => setAddProduct(false)} />}

          {addCategory && <AddCategory cancel={() => setAddCategory(false)} />}

          {addAdditional && <AddAdditional cancel={ClickAdd} />}

          {editCategory && (
            <EditCategory
              cancel={() => setEditCategory(false)}
              ClickAdd={ClickAdd}
            />
          )}
        </Container>
      </div>
    </>
  );
}
