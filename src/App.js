import React from 'react';
import './global.css';

import Router from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer/>
    </div>
  );
}

export default App;
