import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './App.css'
import Header from './components/header/header';
import Background from './components/background/background';
//import { persistor, store } from "./redux/store";
//import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>*/}
      <Background />
      <Header />
      <App />
      {/*  </PersistGate >
      </Provider >*/}
    </BrowserRouter>
  </React.StrictMode>
);
