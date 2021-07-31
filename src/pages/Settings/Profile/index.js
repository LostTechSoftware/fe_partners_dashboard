import React from "react";
import { Edit } from "react-feather";

import PopUp from "../../../Components/PopUp";
import Settings from "..";
import { useScreenMeasure } from "../../../utils/isMobile";
import { useProfile } from "./hooks";

import {
  ThumbNail,
  Logo2,
  GridInputs,
  Input,
  ContainerInput,
  InputName,
  Label,
  Container,
} from "./styles";

function Profile() {
  const [
    restaurant,
    handleUploadThumbail,
    thumbNail,
    logo,
    handleUploadLogo,
    showPopupThumb,
    showPopupLogo,
    setShowPopupThumbnail,
    setShowPopupLogo,
    onImgLoad,
    dimension,
    changeThumbnail,
    changeLogo,
  ] = useProfile();
  const [isMobile] = useScreenMeasure();

  return (
    <Settings path="profile">
      <ThumbNail src={(thumbNail && thumbNail.preview) || restaurant.thumb}>
        <div className="opacity" />

        <div className="row">
          <Edit size={isMobile ? 20 : 27} />
          <p>Clique aqui para alterar a imagem</p>
        </div>

        <input type="file" onChange={handleUploadThumbail} accept="image/*" />
      </ThumbNail>

      <Logo2 src={(logo && logo.preview) || restaurant.avatar}>
        <div className="opacity" />

        <div className="row">
          <Edit size={isMobile ? 15 : 25} />
          <p>Alterar</p>
        </div>

        <input type="file" onChange={handleUploadLogo} accept="image/*" />
      </Logo2>

      <GridInputs>
        <Input>
          <ContainerInput>
            <Label>Nome do estabelecimento</Label>
            <InputName>{restaurant.name}</InputName>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Telefone</Label>
            <InputName>{restaurant.telephone}</InputName>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>@ do estabelecimento</Label>
            <InputName>{restaurant.slug}</InputName>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Bairro</Label>
            <InputName>{restaurant.neighborhood}</InputName>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Endereço</Label>
            <InputName>{restaurant.street}</InputName>
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Cidade</Label>
            <InputName>{restaurant.city}</InputName>
          </ContainerInput>
        </Input>
      </GridInputs>

      <PopUp
        show={showPopupThumb}
        width={"500px"}
        height={"400px"}
        title="Confirmar alterações"
        buttonLabel="Confirmar"
        close={() => setShowPopupThumbnail(!showPopupThumb)}
        onClick={changeThumbnail}
      >
        <Container>
          <img onLoad={onImgLoad} src={thumbNail && thumbNail.preview} />

          <p>
            A dimensão da sua imagem é de: {dimension && dimension.width}x
            {dimension && dimension.height}
            <br />
            Dimensão adequada: 460x120 pixels
          </p>
        </Container>
      </PopUp>

      <PopUp
        show={showPopupLogo}
        width={"500px"}
        height={"400px"}
        title="Confirmar alterações"
        buttonLabel="Confirmar"
        close={() => setShowPopupLogo(!showPopupLogo)}
        onClick={changeLogo}
      >
        <Container>
          <img onLoad={onImgLoad} src={logo && logo.preview} />

          <p>
            A dimensão da sua imagem é de: {dimension && dimension.width}x
            {dimension && dimension.height}
            <br />
            Dimensão adequada: 100x100 pixels
          </p>
        </Container>
      </PopUp>
    </Settings>
  );
}

export default Profile;
