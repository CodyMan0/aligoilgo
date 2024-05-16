import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import queryClient from './constants/queryClient';
import ToastProvider from './context/toast/ToastProvider';
import './styles/global.css';
import { routerInfo } from './utils/router';

const routerObject = createBrowserRouter(routerInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ToastProvider>
      <main className="layout overflow-auto bg-white scroll-smooth">
        <RouterProvider router={routerObject} />
      </main>
    </ToastProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
