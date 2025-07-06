import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { rootRouter } from './router/router';
import { CartProvider } from './features/cartContext';
import { ToastProvider } from './features/toastContext';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
  <ToastProvider> 
    <CartProvider>
      <RouterProvider router={rootRouter} />
      </CartProvider>
   </ToastProvider>
  </StrictMode>
);
