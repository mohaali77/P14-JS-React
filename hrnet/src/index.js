import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './App.css'
import Header from './components/header';
import Background from './components/background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Background />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
