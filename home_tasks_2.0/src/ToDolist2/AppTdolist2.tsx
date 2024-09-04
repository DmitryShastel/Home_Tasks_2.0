import React, {useEffect} from 'react';
import app from './appRoot2.module.css'
import {LoginHeaderMenu} from "./Login/loginHeaderMenu";
import {LoginPage} from "./Login/loginPage";
import {Route, Routes} from "react-router-dom";
import {Todolist2} from "./Todolist2";
import {ThunkDispatch} from "redux-thunk";
import {TodolistRootStateType} from "./store/storeToDoList2";
import {AnyAction} from "redux";
import {useDispatch} from "react-redux";
import {initializeAppTC} from "./store/login-reducer";


export const AppTodolist2 = React.memo(() => {

    const dispatch: ThunkDispatch<TodolistRootStateType, unknown, AnyAction> = useDispatch();

    useEffect(() => {
        dispatch(initializeAppTC());
    }, []);

    return (
        <div className={app.container}>
            <LoginHeaderMenu/>
            <div className={app.App}>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/" element={<Todolist2/>}/>
                </Routes>

            </div>
        </div>
    );
})

