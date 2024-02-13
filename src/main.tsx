import React from 'react';
import ReactDOM from 'react-dom/client';
import QuotesApp from './components/QuotesApp'; // Update import path
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuotesApp />
  </React.StrictMode>
);
