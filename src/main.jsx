import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure App.jsx exists in the src folder
import './index.css'; // Ensure index.css exists in the src folder

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
