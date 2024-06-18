import React from 'react';
import {Todolist2} from "./Todolist2";
import app from './appRoot2.module.css'
import {Login} from "./Login/login";


export const AppTodolist2 = React.memo(() => {
    return (
        <div className={app.container}>
            <Login/>
            <div className={app.App}>
                <Todolist2/>
                <Todolist2/>
                <Todolist2/>
                <Todolist2/>
            </div>
        </div>
    );
})