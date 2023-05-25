import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';

if (import.meta.env.VITE_MOCKS === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = await import('../mocks/browser');
  worker.start({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onUnhandledRequest(req: {
      url: { pathname: string; href: any };
      method: any;
    }) {
      if (req.url.pathname.startsWith('/favicon.ico')) {
        return;
      }

      console.error(
        'Found an unhandled %s request to %s',
        req.method,
        req.url.href
      );
    },
  });
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
