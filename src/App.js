import React from "react";
import { ToastContainer } from "react-toastify";

import Router from "./routes";
import { PrinterHeader, PrinterFooter } from "./Components/Print";

import "./global.css";
import "./print.css";
import { AuthProvider } from "./contexts/acessLevel";

function App() {
  return (
    <div className="App">
      <PrinterHeader />
      <AuthProvider>
        <Router />
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
      <PrinterFooter />
    </div>
  );
}

export default App;
