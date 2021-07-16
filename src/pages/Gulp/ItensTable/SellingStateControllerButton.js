import React, { useState } from "react";
import { Button } from "@material-ui/core";
import {
  PlayCircleFilledRounded,
  PauseCircleFilledRounded,
} from "@material-ui/icons";

import api from "../../../services/api";

export default function SellingStateControllerButton({
  sellingState,
  productId,
  rowId,
}) {
  const [state, setState] = useState(sellingState);
  const [loading, setLoading] = useState(false);

  async function changeProductAvailability() {
    setLoading(true);

    if (rowId) await api.post(`/pause/row/${rowId}`);

    if (productId) await api.post(`/product/pause/${productId}`);

    setState(state ? false : true);
    setLoading(false);
  }

  return (
    <Button onClick={changeProductAvailability}>
      {!state ? (
        <>
          <PauseCircleFilledRounded />
          <p>{loading ? "Pausando..." : "Pausar vendas"}</p>
        </>
      ) : (
        <>
          <PlayCircleFilledRounded />
          <p>{loading ? "Despausando..." : "Retomar vendas"}</p>
        </>
      )}
    </Button>
  );
}
