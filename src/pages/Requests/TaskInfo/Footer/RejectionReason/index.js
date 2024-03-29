import React, { useState } from "react";
import { DialogActions, Backdrop, CircularProgress } from "@material-ui/core";
import { toast } from "../../../Components/Toast";

import api from "../../../../../services/api";
import MainButton from "../../../../../Components/MainButton";
import "./styles.css";

export default function RejectionReason({
  taskId,
  closeModal,
  reloadTask,
  loadRequests,
}) {
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  async function rejectOrder() {
    setLoading(true);
    await api
      .post(`/reject/order/${taskId}`, {
        reason: reason,
      })
      .catch((error) => toast.error(error.response.data))
      .then((response) => toast.warning("Pedido rejeitado!"));

    closeModal();
    setLoading(false);
    reloadTask();
    loadRequests();
  }

  return (
    <>
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
      {!loading ? (
        <div className="rejectionReason">
          <label htmlFor="reason">
            <h2></h2>
          </label>

          <textarea
            type="text"
            id="reason"
            placeholder="Motivo do cancelamento (Acabou...)"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
          />

          <DialogActions>
            <MainButton onClick={rejectOrder}>Enviar</MainButton>
          </DialogActions>
        </div>
      ) : null}
    </>
  );
}
