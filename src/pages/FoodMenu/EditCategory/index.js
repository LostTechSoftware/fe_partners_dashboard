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

function EditCategory({ cancel, ClickAdd }) {
  const [isMobile] = useScreenMeasure();
  const [additionals, openPopUp, popUp] = useEditCategory();

  return (
    <Modal cancel={cancel} title="Hamburgueres">
      {false ? (
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

            <RowsProduct>
              {false ? (
                <LoadingSkeleton
                  isLoading={false}
                  hasHeading
                  containerHeight="30px"
                  containerWidth={isMobile ? "70%" : "33%"}
                >
                  Bebidas
                </LoadingSkeleton>
              ) : (
                <Title>Bebidas</Title>
              )}
              <RightComponent>
                <ButtonEdit>
                  <Edit2 />
                  <TitleButton>Editar</TitleButton>
                </ButtonEdit>
              </RightComponent>
            </RowsProduct>

            <ContainerAdditional>
              {additionals.map((a) => (
                <Additional onClick={ClickAdd}>
                  <AdditionalAvatar src="https://ogimg.infoglobo.com.br/in/24503607-661-09d/FT1086A/73064201_Rio-de-Janeiro-RJ-18-11-2017Refrigerantes-em-lata-Coca-cola-original-coca-cola-zero-coca.jpg" />
                  <ContainerTitle>
                    <TitleAdditional>Coca-cola</TitleAdditional>
                    <Price>R$ 5,00</Price>
                  </ContainerTitle>
                </Additional>
              ))}

              <AddAdditional onClick={ClickAdd}>
                <Plus />
                <Text>Adicionar</Text>
              </AddAdditional>
            </ContainerAdditional>
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
      <PopUpReorder />
    </Modal>
  );
}

export default EditCategory;
