import React from 'react';
import {Todolist2} from "./Todolist2";
import app from './appRoot2.module.css'
import {Login} from "./Login/login";
import {AddItemForm2} from "./components/AddItemForm2";
import {ThunkDispatch} from "redux-thunk";
import {TodolistRootStateType} from "./store/storeToDoList2";
import {AnyAction} from "redux";
import {useDispatch} from "react-redux";
import {addTodolistTC} from "./store/todolist-reducer2";


export const AppTodolist2 = React.memo(() => {

    const dispatch: ThunkDispatch<TodolistRootStateType, any, AnyAction> = useDispatch();


    const addItem = (todolistTitle: string) => {
        dispatch(addTodolistTC(todolistTitle))
    }

    return (
        <div className={app.container}>
            <Login/>
            <>
                <AddItemForm2 callback={addItem}/>
            </>
            <div className={app.App}>
                <Todolist2/>
            </div>
        </div>
    );
})