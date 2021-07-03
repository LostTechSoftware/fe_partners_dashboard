import React from "react";
import { useScreenMeasure } from "../../../utils/isMobile";
import Checkbox from "@material-ui/core/Checkbox";

import {
  Container,
  Title,
  ContainerDropZone,
  Input,
  Label,
  InputName,
  CaractersCount,
  ContainerInput,
  Selector,
  TextArea,
  InputPrice,
  SubTitle,
  ContainerCheckBox,
  Separator,
  LabelCheckBox,
  BottomContainer,
  BottomButton,
  BottomLabel,
  GridDays,
  BoxDay,
  DayName,
  ContainerCenter,
  ClickOut,
} from "./styles";
import Dropzone from "./DropZone";
import { useAddProduct } from "./hooks";
import "./styles.css";

function AddProduct({ cancel }) {
  const [isMobile] = useScreenMeasure();
  const [days] = useAddProduct();

  return (
    <>
      <ClickOut onClick={cancel} />
      <Container className="animationModal" isMobile={isMobile}>
        <Title>Adicione o primeiro produto da categoria</Title>

        <ContainerDropZone>
          <Dropzone />
        </ContainerDropZone>

        <Input>
          <ContainerInput>
            <Label>Nome do produto</Label>
            <InputName placeholder="Ex: Pizza de calabresa" />
            <CaractersCount>0/100</CaractersCount>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput flex>
            <ContainerInput half>
              <Label>Tipo do produto</Label>
              <Selector />
            </ContainerInput>

            <ContainerInput half>
              <Label>Categoria</Label>
              <Selector />
            </ContainerInput>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Igredientes</Label>
            <TextArea placeholder="Ex: massa, queijo, tomate, presunto..." />
            <CaractersCount>0/100</CaractersCount>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Preço</Label>
            <InputPrice type="number" placeholder="R$ 0,00" />
          </ContainerInput>
        </Input>

        <Separator>
          <SubTitle>Promoção</SubTitle>

          <ContainerCheckBox>
            <LabelCheckBox>Ativada</LabelCheckBox>
            <Checkbox color="primary" />
          </ContainerCheckBox>
        </Separator>

        <Input>
          <ContainerInput flex>
            <ContainerInput half>
              <Label>Preço promocional</Label>
              <InputName half type="number" placeholder="R$ 0,00" />
            </ContainerInput>

            <ContainerInput half>
              <Label>Duração</Label>
              <Selector />
            </ContainerInput>
          </ContainerInput>
        </Input>

        <GridDays>
          {days.map((day) => (
            <ContainerCenter>
              <BoxDay selected={day === "segunda" || day === "quarta"}>
                <DayName selected={day === "segunda" || day === "quarta"}>
                  {day}
                </DayName>
              </BoxDay>
            </ContainerCenter>
          ))}
        </GridDays>

        {isMobile && (
          <BottomContainer isMobile={isMobile}>
            <BottomButton onClick={cancel} outline>
              <BottomLabel outline>Voltar</BottomLabel>
            </BottomButton>

            <BottomButton>
              <BottomLabel>Continuar</BottomLabel>
            </BottomButton>
          </BottomContainer>
        )}
      </Container>

      {!isMobile && (
        <BottomContainer isMobile={isMobile}>
          <BottomButton onClick={cancel} outline>
            <BottomLabel outline>Voltar</BottomLabel>
          </BottomButton>

          <BottomButton>
            <BottomLabel>Continuar</BottomLabel>
          </BottomButton>
        </BottomContainer>
      )}
    </>
  );
}

export default AddProduct;
