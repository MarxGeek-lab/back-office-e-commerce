import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
        
        

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);

reportWebVitals();
