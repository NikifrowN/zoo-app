import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './pages/App';
import { Provider } from 'react-redux';
import { store } from './root-module';
import { Header } from './features/header/ui/header/component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Header />
      <App />
    </Provider>
  </React.StrictMode>
);
