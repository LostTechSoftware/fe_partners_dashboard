import React from "react";
import Settings from "..";
import { useProfile } from "./hooks";

import {
  ThumbNail,
  Logo2,
  GridInputs,
  Input,
  ContainerInput,
  InputName,
  Label,
} from "./styles";

function Profile() {
  const [restaurant] = useProfile();
  console.log(restaurant);

  return (
    <Settings path="profile">
      <ThumbNail src={restaurant.thumb} />
      <Logo2 src={restaurant.avatar} />

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
    </Settings>
  );
}

export default Profile;
