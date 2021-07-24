import React from "react";
import { ToastContainer } from "react-toastify";

import Router from "./routes";

import "./global.css";
import "./print.css";
import { OpenedProvider } from "./contexts/opened";

function App() {
  return (
    <div className="App">
      <OpenedProvider>
        <Router />
      </OpenedProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
