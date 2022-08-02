import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import favoritosReducer from './Services/Favoritos';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    favoritos: favoritosReducer
  }
})

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
