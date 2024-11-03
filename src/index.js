import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/amiri'; // استيراد الخط
import './index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);