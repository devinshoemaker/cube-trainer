import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import reportWebVitals from './reportWebVitals';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
