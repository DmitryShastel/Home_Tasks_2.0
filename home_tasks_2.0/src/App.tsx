import React from 'react';
import './App.css';
import {AppRoot} from "./SocialNetwork/AppRoot";
import {NotFoundPage} from "./SocialNetwork/menuPage/notFoundPage";

export function App() {
    return (
        <div className="App">
            <AppRoot/>
            {/*<NotFoundPage/>*/}
        </div>
    );
}
