import React from "react";
import { Search, Plus, Sliders } from "react-feather";

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
  Option,
} from "./styles";
import MainMenu from "../../Components/MainMenu";
import AddProduct from "./AddProduct";
import { useMenu } from "./hooks";
import { useScreenMeasure } from "../../utils/isMobile";
import AddCategory from "./AddCategory";
import AddAdditional from "./AddAdditional";
import EditCategory from "./EditCategory";
import Rows from "./Rows";

export default function FoodMenu() {
  const [isMobile] = useScreenMeasure();
  const [
    setAddCategory,
    setAddProduct,
    remove,
    setRemove,
    addProduct,
    addCategory,
    addAdditional,
    isMenuMobileOpened,
    handleMenuMobileOpen,
    editCategory,
    setEditCategory,
    ClickAdd,
    rows,
    loading,
    selectedProduct,
    setSelectedProduct,
    reload,
    setReload,
    selectedRows,
    setSelectedRow,
    selectedAdditonal,
    uploadedFiles,
    setUploadedFile,
    additionals,
    setAdditionals,
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
              <Selector>
                <Option>Todas as categorias</Option>
              </Selector>
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

            {rows.map((row) => (
              <Rows
                setEditCategory={setEditCategory}
                row={row}
                reload={reload}
                setReload={setReload}
                loading={loading}
                setAddProduct={setAddProduct}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                setSelectedRow={setSelectedRow}
              />
            ))}
          </ContainerPadding>

          {addProduct && (
            <AddProduct
              reload={reload}
              setReload={setReload}
              product={selectedProduct}
              rows={rows}
              cancel={() => setAddProduct(false)}
            />
          )}

          {addCategory && <AddCategory cancel={() => setAddCategory(false)} />}

          {addAdditional && (
            <AddAdditional
              uploadedFiles={uploadedFiles}
              setUploadedFile={setUploadedFile}
              selectedAdditonal={selectedAdditonal}
              cancel={ClickAdd}
              rows={additionals}
            />
          )}

          {editCategory && (
            <EditCategory
              selectedRows={selectedRows}
              setSelectedRow={setSelectedRow}
              cancel={() => setEditCategory(false)}
              ClickAdd={ClickAdd}
              additionals={additionals}
              setAdditionals={setAdditionals}
            />
          )}
        </Container>
      </div>
    </>
  );
}
