import React from "react";
import { ToastContainer } from "react-toastify";

import Router from "./routes";

import "./global.css";
import "./print.css";
import { OpenedProvider } from "./contexts/opened";
import { AuthProvider } from "./contexts/acessLevel";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <OpenedProvider>
          <Router />
        </OpenedProvider>
      </AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
