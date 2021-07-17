import React from "react";
import { ToastContainer } from "react-toastify";

import Router from "./routes";

import "./global.css";
import "./print.css";

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
