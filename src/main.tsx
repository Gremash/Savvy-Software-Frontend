import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './utils/config.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
