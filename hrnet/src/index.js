import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './App.css'
import Header from './components/header/header';
import Background from './components/background/background';
import { Provider } from 'react-redux';
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Background />
        <Header />
        <App />
      </Provider >
    </BrowserRouter>
  </React.StrictMode>
);
