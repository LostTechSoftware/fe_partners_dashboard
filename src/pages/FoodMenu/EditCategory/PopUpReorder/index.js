import React from "react";

import PopUp from "../../../../Components/PopUp";
import DNDComponent from "../../../../Components/DNDComponent";

import { useReorder } from "./hooks";

function PopUpReorder({ rows, show, close, setReload }) {
  const [setItems, ReorderRows] = useReorder({ rows, setReload });

  return (
    <PopUp
      title={"Reorganizar categorias"}
      show={show}
      close={close}
      buttonLabel="Salvar alterações"
      onClick={ReorderRows}
    >
      <DNDComponent defaultItens={rows} setItem={setItems} />
    </PopUp>
  );
}

export default PopUpReorder;
