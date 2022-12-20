import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "./core/hooks/ThemeProvider";
import {Provider} from "react-redux";
import {store} from "./core/store/index"

import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
      </Provider>
  // </React.StrictMode>
);

