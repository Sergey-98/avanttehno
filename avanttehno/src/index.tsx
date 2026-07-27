import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import { hydrate, render } from 'react-dom';
// import { hydrateRoot } from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />);

const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement.hasChildNodes()) {
  // hydrateRoot(rootElement, <App />);
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
