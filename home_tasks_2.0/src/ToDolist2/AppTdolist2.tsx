import React from 'react';
import {Todolist2} from "./Todolist2";
import app from './appRoot2.module.css'



export const AppTodolist2 = React.memo(() => {
    return (
        <div className={app.App}>
            <Todolist2/>
        </div>
    );
})