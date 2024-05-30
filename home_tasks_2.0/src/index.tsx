import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {storeSocialNetwork2} from "./SocialNetwork2.0/store/store";
import {AppRootSN2_0} from "./SocialNetwork2.0/AppRoot2.0";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={storeSocialNetwork2}>
            <BrowserRouter>
                <AppRootSN2_0/>
            </BrowserRouter>
        </Provider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
