import React from "react";
import Settings from "..";

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
  return (
    <Settings>
      <ThumbNail src="https://www.mcdonalds.com.br/uploads/App_do_Mequi_Desk_580x250_2d9cc1d782.png" />
      <Logo2 src="https://pbs.twimg.com/profile_images/1402367254067568641/LTLk2lAL_400x400.jpg" />

      <GridInputs>
        <Input>
          <ContainerInput>
            <Label>Nome do estabelecimento</Label>
            <InputName placeholder="Ex: Pizza de calabresa" />
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Telefone</Label>
            <InputName placeholder="Ex: Pizza de calabresa" />
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>@ do estabelecimento</Label>
            <InputName placeholder="Ex: Pizza de calabresa" />
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Bairro</Label>
            <InputName placeholder="Ex: Pizza de calabresa" />
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Endereço</Label>
            <InputName placeholder="Ex: Pizza de calabresa" />
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Cidade</Label>
            <InputName placeholder="Ex: Pizza de calabresa" />
          </ContainerInput>
        </Input>
      </GridInputs>
    </Settings>
  );
}

export default Profile;
