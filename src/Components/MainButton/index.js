import React from "react";
import { Button, CircularProgress } from "@material-ui/core";

import "./styles.css";

export default function MainButton({
  children,
  onClick,
  type,
  boxId,
  loading,
}) {
  return (
    <div className="mainButton" id={boxId}>
      <Button onClick={onClick} type={type} disabled={loading ? true : false}>
        {loading ? <CircularProgress /> : children}
      </Button>
    </div>
  );
}
