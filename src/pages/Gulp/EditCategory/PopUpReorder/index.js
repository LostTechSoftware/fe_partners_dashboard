import React from "react";

import PopUp from "../../../../Components/PopUp";
import DNDComponent from "../../../../Components/DNDComponent";

import { useReorder } from "./hooks";

function PopUpReorder({ rows, show, close, setReload }) {
  const [setItems, ReorderRows] = useReorder({ rows, setReload });

  return (
    <PopUp
      style={{ overflowY: "scroll", maxHeight: "500px" }}
      height="auto"
      width="700px"
      title={"Reorganizar categorias"}
      show={show}
      close={close}
      buttonLabel="Salvar alterações"
      onClick={ReorderRows}
      buttonContainerReorder={true}
      mobileHeight="auto"
    >
      <DNDComponent defaultItens={rows} setItem={setItems} />
    </PopUp>
  );
}

export default PopUpReorder;
