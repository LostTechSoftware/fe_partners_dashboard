import React from "react";
import { ToastContainer } from "react-toastify";

import Router from "./routes";
import { PrinterHeader, PrinterFooter } from "./Components/Print";

import "./global.css";
import "./print.css";

function App() {
  return (
    <div className="App">
      <PrinterHeader />
      <Router />
      <ToastContainer />
      <PrinterFooter />
    </div>
  );
}

export default App;
