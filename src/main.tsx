import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import RouterView from '@/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterView></RouterView>
  </React.StrictMode>,
);
