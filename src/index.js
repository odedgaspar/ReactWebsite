import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/components/Styles/index.css';
import App from './App';
import { CartProvider } from './components/CartContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
);


