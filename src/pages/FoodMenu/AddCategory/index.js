import React from "react";

import { Container, Label, Input } from "./styles";
import Modal from "../../../Components/Modal";
import { useAddCategory } from "./hooks";

function AddCategory({ cancel }) {
  const [title, setTitle, addNewCategory] = useAddCategory();

  return (
    <Modal
      cancel={cancel}
      onClick={addNewCategory}
      displayBottom
      title="Nova categoria"
    >
      <Container>
        <Label>Defina um nome para a nova categoria</Label>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Ex: Lanches"
        />
      </Container>
    </Modal>
  );
}

export default AddCategory;
