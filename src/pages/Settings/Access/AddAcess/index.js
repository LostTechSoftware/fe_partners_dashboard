import React from "react";

import {
  Input,
  Label,
  InputName,
  ContainerInput,
  Selector,
  Content,
} from "./styles";
import Modal from "../../../../Components/Modal";
import { useAddAccess } from "./hooks";
import { Option } from "../styles";
import "./checkbox.css";
import "./styles.css";

function AddAcess({ cancel }) {
  const [
    email,
    setEmail,
    password,
    setPassword,
    level,
    setLevel,
    name,
    setName,
    CreateNewAcess,
    loading,
  ] = useAddAccess();

  return (
    <Modal
      cancel={cancel}
      onClick={CreateNewAcess}
      displayBottom
      title="Adicionar pessoa"
      buttonsDisabled={loading}
    >
      <Content>
        <Input>
          <ContainerInput>
            <Label>Nome completo</Label>
            <InputName
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Email</Label>
            <InputName
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </ContainerInput>
        </Input>

        <Input>
          <ContainerInput>
            <Label>Senha</Label>
            <InputName
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
          </ContainerInput>
        </Input>
        <Input>
          <ContainerInput>
            <Label>Cargo</Label>
            <Selector
              value={level}
              onChange={(event) => setLevel(event.target.value)}
              full
            >
              <Option value={0}>Dono (a)</Option>
              <Option value={1}>Gerente</Option>
              <Option value={2}>Atendente</Option>
            </Selector>
          </ContainerInput>
        </Input>
      </Content>
    </Modal>
  );
}

export default AddAcess;
