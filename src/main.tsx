import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import i18n from './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './state/store';
import { theme } from './theme';

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </ThemeProvider>
        </I18nextProvider>
    </Provider>,
    document.getElementById('root'),
);

reportWebVitals();
