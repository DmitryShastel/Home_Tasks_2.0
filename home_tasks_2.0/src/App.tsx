import React from 'react';
import './App.css';
import {AppRoot} from "./ToDoList/AppRoot";


export const App = React.memo(() => {
    console.log('App')
    return (
        <div className="App">
            <AppRoot/>
        </div>
    );
})

