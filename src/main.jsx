import React from 'react';
import ReactDOM from 'react-dom/client';
import { GitExpertApp } from './GitExpertApp.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //TODO: para producción, usar React.StrictMode, que se encarga de detectar errores de diseño, y manejarlos de manera segura
  // <React.StrictMode>
  //   <GitExpertApp />
  // </React.StrictMode>,

  <GitExpertApp />,
);
