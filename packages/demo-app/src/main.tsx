import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UIProvider } from '@richardnjoku/ui-kit';

import App from './app';
import "./styles/base.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <UIProvider>
                <App />
            </UIProvider>
        </BrowserRouter>
    </React.StrictMode>
);
