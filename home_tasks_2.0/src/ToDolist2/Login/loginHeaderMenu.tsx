import React from 'react';
import login from './loginHeaderMenu.module.css';
import {SuperButton2} from "../components/SuperButton2";
import {Link} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {logOutTC} from "../store/login-reducer";
import {TodolistRootStateType} from "../store/storeToDoList2";

export const LoginHeaderMenu = () => {

    const dispatch: ThunkDispatch<unknown, unknown, AnyAction> = useDispatch();
    const isAuth = useSelector((state: TodolistRootStateType) => state.auth.isAuthMe)

    const logOutHandler = () => {
        dispatch(logOutTC())
    }

    return (
        <div className={login.container}>
            <div className={login.buttons}>
                {
                    isAuth
                        ? <SuperButton2 title={'Log out'} callback={logOutHandler}/>
                        : <Link to='/login'>
                            <SuperButton2 title={'Login In'} callback={() => {
                            }}/>
                        </Link>
                }
            </div>
        </div>
    );
};