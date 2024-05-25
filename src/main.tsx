import * as Sentry from '@sentry/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import queryClient from './constants/queryClient';
import ToastProvider from './context/toast/ToastProvider';
import './styles/global.css';
import { routerInfo } from './utils/router';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  environment: import.meta.env.PROD ? 'production' : 'development',
  enabled: import.meta.env.PROD,
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost'],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

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
