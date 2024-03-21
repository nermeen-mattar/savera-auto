import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import i18n from './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './state/store';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './theme';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Root element 'root' not found");
}

const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <React.StrictMode>
                    <GlobalStyles />
                    <App />
                </React.StrictMode>
            </ThemeProvider>
        </I18nextProvider>
    </Provider>,
);

reportWebVitals();
