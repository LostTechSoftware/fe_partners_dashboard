import React from "react";
import { Plus, Edit2 } from "react-feather";

import Modal from "../../../Components/Modal";
import { useScreenMeasure } from "../../../utils/isMobile";
import { LoadingSkeleton } from "../../../Components/LoadingSkeleton";

import {
  Container,
  ButtonContainer,
  TextButton,
  ButtonsHeaderContainer,
  ContainerPadding,
  RightComponent,
  ContainerAdditional,
  Additional,
  ContainerTitle,
  TitleAdditional,
  Price,
  AddAdditional,
  AdditionalAvatar,
  Text,
  ContainerCenter,
  TitleEmpty,
} from "./styles";

import { RowsProduct, Title, ButtonEdit, TitleButton } from "../styles";
import { useEditCategory } from "./hooks";
import PopUpNewCategory from "./PopUpNewCategory";

const renderLoading = () => {
  return (
    <Additional>
      <LoadingSkeleton
        isLoading
        hasHeading
        containerHeight="100%"
        containerWidth="100%"
      />
    </Additional>
  );
};

const Loading = ({ repeat = 1 }) => {
  return Array.from({ length: repeat }, () => renderLoading());
};

function EditCategory({
  cancel,
  ClickAdd,
  selectedRows,
  additionals,
  setAdditionals,
  setReload: setReloadRows,
}) {
  const [isMobile] = useScreenMeasure();
  const [
    openPopUp1,
    popUp1,
    selectedRowAdditional,
    setSelectedRowAdditional,
    selectedIndex,
    setSelectedIndex,
    loading,
    setReload,
    onChangeTitle,
    title,
  ] = useEditCategory({
    rowId: selectedRows._id,
    setAdditionals,
    additionals,
    setReloadRows,
    rowTitle: selectedRows.title,
  });

  return (
    <Modal
      width={50}
      isEditable
      cancel={cancel}
      onChangeTitle={onChangeTitle}
      title={title}
    >
      {additionals.length ? (
        <Container>
          <ContainerPadding>
            <ButtonsHeaderContainer>
              <ButtonContainer onClick={openPopUp1} background>
                <Plus size={30} />
                <TextButton background>
                  {isMobile ? "Novo" : "Nova categoria"}
                </TextButton>
              </ButtonContainer>
            </ButtonsHeaderContainer>

            {additionals.map((additional, index) => (
              <>
                <RowsProduct>
                  {false ? (
                    <LoadingSkeleton
                      isLoading={false}
                      hasHeading
                      containerHeight="30px"
                      containerWidth={isMobile ? "70%" : "33%"}
                    >
                      {additional.title}
                    </LoadingSkeleton>
                  ) : (
                    <Title>{additional.title}</Title>
                  )}
                  <RightComponent>
                    <ButtonEdit
                      onClick={() => {
                        setSelectedRowAdditional(additional);
                        openPopUp1();
                        setSelectedIndex(index);
                      }}
                    >
                      <Edit2 />
                      <TitleButton>Editar</TitleButton>
                    </ButtonEdit>
                  </RightComponent>
                </RowsProduct>

                <ContainerAdditional>
                  {loading ? (
                    <Loading repeat={6} />
                  ) : (
                    <>
                      {additional.additional.map((a) => (
                        <Additional onClick={() => ClickAdd(a)}>
                          <AdditionalAvatar
                            src={
                              a.avatar
                                ? a.avatar
                                : "https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Doodle+2.jpg"
                            }
                          />
                          <ContainerTitle>
                            <TitleAdditional>{a.title}</TitleAdditional>
                            <Price>
                              {a.price.toLocaleString("pt-br", {
                                currency: "brl",
                                style: "currency",
                              })}
                            </Price>
                          </ContainerTitle>
                        </Additional>
                      ))}

                      <AddAdditional
                        onClick={() => ClickAdd(null, index, additional)}
                      >
                        <Plus />
                        <Text>Adicionar</Text>
                      </AddAdditional>
                    </>
                  )}
                </ContainerAdditional>
              </>
            ))}
          </ContainerPadding>
        </Container>
      ) : (
        <ContainerCenter>
          <TitleEmpty>Essa categoria não possui nenhum adicional</TitleEmpty>

          <ButtonContainer onClick={openPopUp1} full background>
            <Plus size={30} />
            <TextButton background>Nova categoria de adicionais</TextButton>
          </ButtonContainer>
        </ContainerCenter>
      )}

      <PopUpNewCategory
        selectedRowAdditional={selectedRowAdditional}
        close={openPopUp1}
        show={popUp1}
        setReload={setReload}
        additionals={additionals}
        setAdditionals={setAdditionals}
        index={selectedIndex}
        selectedRows={selectedRows}
      />
    </Modal>
  );
}

export default EditCategory;
