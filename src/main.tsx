import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './apps/App';
import { RouterProvider, StoreProvider, ThemeProvider } from '@/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
