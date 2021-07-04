import React from "react";
import { Plus, Sliders, Edit2 } from "react-feather";

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
import PopUpReorder from "./PopUpReorder";

function EditCategory({
  cancel,
  ClickAdd,
  selectedRows,
  additionals,
  setAdditionals,
}) {
  const [isMobile] = useScreenMeasure();
  const [openPopUp] = useEditCategory({
    rowId: selectedRows._id,
    setAdditionals,
  });

  return (
    <Modal cancel={cancel} title="Hamburgueres">
      {additionals.length ? (
        <Container>
          <ContainerPadding>
            <ButtonsHeaderContainer>
              <ButtonContainer onClick={openPopUp} background>
                <Plus size={30} />
                <TextButton background>
                  {isMobile ? "Novo" : "Nova categoria"}
                </TextButton>
              </ButtonContainer>

              <ButtonContainer>
                <Sliders />
                <TextButton>Reorganizar </TextButton>
              </ButtonContainer>
            </ButtonsHeaderContainer>

            {additionals.map((additional) => (
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
                    <ButtonEdit>
                      <Edit2 />
                      <TitleButton>Editar</TitleButton>
                    </ButtonEdit>
                  </RightComponent>
                </RowsProduct>

                <ContainerAdditional>
                  {additional.additional.map((a) => (
                    <Additional onClick={() => ClickAdd(a)}>
                      <AdditionalAvatar
                        src={
                          a.avatar
                            ? a.avatar
                            : "https://serverem.s3.us-east-2.amazonaws.com/conjunto-de-mao-desenhada-bebidas-doodle_6997-2435.jpg"
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

                  <AddAdditional onClick={ClickAdd}>
                    <Plus />
                    <Text>Adicionar</Text>
                  </AddAdditional>
                </ContainerAdditional>
              </>
            ))}
          </ContainerPadding>
        </Container>
      ) : (
        <ContainerCenter>
          <TitleEmpty>Essa categoria não possui nenhum adicional</TitleEmpty>

          <ButtonContainer onClick={openPopUp} full background>
            <Plus size={30} />
            <TextButton background>Nova categoria de adicionais</TextButton>
          </ButtonContainer>
        </ContainerCenter>
      )}

      {/* <PopUpNewCategory /> */}
      {/* <PopUpReorder /> */}
    </Modal>
  );
}

export default EditCategory;
