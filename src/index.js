import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';

import App from './App';
import StateProvider from './utils/StateProvider';
import { mainReducer, initialState } from './reducers/mainReducer';
import * as reset from './styling/reset.css';
import * as global from './styling/global.css';

const GlobalStyle = createGlobalStyle`
    ${reset} 
    ${global}
    body{
        font-family: ${({ theme }) => theme.loraFont}
    }
`;

const theme = {
    tinyFont: '1.2rem',
    smallFont: '1.8rem',
    mediumFont: '2.4rem',
    largeFont: '3.0rem',
    hugeFont: '4.0rem',
    poppinsFont: `"Poppins", sans-serif`,
    loraFont: `"Lora", serif`,
    blue: `#66afe0`,
    darkBlue: `#247DB7`,
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <Router>
                <StateProvider
                    initialState={initialState}
                    reducer={mainReducer}>
                    <App />
                </StateProvider>
            </Router>
        </>
    </ThemeProvider>,
    document.getElementById('root')
);
