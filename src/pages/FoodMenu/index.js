import React from "react";
import { Search, Plus, Sliders, Play, Pause } from "react-feather";

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
  RightComponent,
  ButtonPause,
  TitleButton,
} from "./styles";

import MainMenu from "../../Components/MainMenu";
import AddProduct from "./AddProduct";
import { useMenu } from "./hooks";
import { useScreenMeasure } from "../../utils/isMobile";
import AddCategory from "./AddCategory";
import AddAdditional from "./AddAdditional";
import EditCategory from "./EditCategory";
import Rows from "./Rows";
import Product from "./Product";
import PopUpReorder from "./EditCategory/PopUpReorder";

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
    search,
    products,
    action,
    text,
    changeAvaliablyAllProduct,
    openPopUp2,
    popUp2,
    defaultRows,
    setRows,
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
            addAdditional ||
            popUp2
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
              <Selector
                onChange={(event) => {
                  if (event.target.value === "all") return setRows(defaultRows);
                  setReload(true);
                  setRows([JSON.parse(event.target.value)]);
                  setTimeout(setReload(false), 1000);
                }}
              >
                <Option value={"all"}>Todas as categorias</Option>
                {defaultRows.map((row) => (
                  <Option value={JSON.stringify(row)}>{row.title}</Option>
                ))}
              </Selector>
            </ContainerSelect>

            <ContainerSearch>
              <SearchBox>
                <Search />
                <Input
                  onChange={(event) => search(event.target.value)}
                  placeholder="Pesquise igredientes ou produtos"
                />
              </SearchBox>
            </ContainerSearch>
          </Header>

          <ContainerPadding>
            {!text && (
              <ButtonsHeaderContainer>
                <ButtonContainer
                  onClick={() => setAddCategory(true)}
                  background
                >
                  <Plus size={30} />
                  <TextButton background>
                    {isMobile ? "Adicionar" : "Adicionar categoria"}
                  </TextButton>
                </ButtonContainer>

                <ButtonContainer onClick={() => openPopUp2()}>
                  <Sliders />
                  <TextButton>
                    {isMobile ? "Reorganizar" : "Reorganizar categorias"}
                  </TextButton>
                </ButtonContainer>
              </ButtonsHeaderContainer>
            )}
            {!text ? (
              rows.map((row) => (
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
              ))
            ) : (
              <>
                <RightComponent>
                  <ButtonPause onClick={() => changeAvaliablyAllProduct(true)}>
                    <Pause />
                    <TitleButton yellow>Pausar tudo</TitleButton>
                  </ButtonPause>

                  <ButtonPause onClick={() => changeAvaliablyAllProduct(false)}>
                    <Play />
                    <TitleButton yellow>Retomar tudo</TitleButton>
                  </ButtonPause>
                </RightComponent>

                <Product
                  reload={reload}
                  setReload={setReload}
                  action={action}
                  search={text}
                  defaultLoading={loading}
                  defaultProducts={products}
                />
              </>
            )}
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
              selectedRows={selectedRows}
            />
          )}

          {editCategory && (
            <EditCategory
              selectedRows={selectedRows}
              setSelectedRow={setSelectedRow}
              cancel={() => setEditCategory(false)}
              ClickAdd={ClickAdd}
              rows={rows}
              additionals={additionals}
              setAdditionals={setAdditionals}
            />
          )}

          <PopUpReorder
            setReload={setReload}
            rows={rows}
            show={popUp2}
            close={openPopUp2}
          />
        </Container>
      </div>
    </>
  );
}
