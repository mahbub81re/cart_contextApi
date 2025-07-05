import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { rootRouter } from './router/router';
import { CartProvider } from './features/cartContext';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={rootRouter} />
    </CartProvider>
  </StrictMode>
);
