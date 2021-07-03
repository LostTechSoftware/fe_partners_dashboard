import React from "react";

import { Container, Label, Input } from "./styles";
import Modal from "../../../Components/Modal";

function AddCategory({ cancel }) {
  return (
    <Modal cancel={cancel} displayBottom title="Nova categoria">
      <Container>
        <Label>Defina um nome para a nova categoria</Label>
        <Input placeholder="Ex: Lanches" />
      </Container>
    </Modal>
  );
}

export default AddCategory;
