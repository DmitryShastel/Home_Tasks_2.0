// import React, {useEffect} from 'react';
// import app from './appRoot2.module.css'
// import {LoginHeaderMenu} from "./Login/loginHeaderMenu";
// import {LoginPage} from "./Login/loginPage";
// import {Route, Routes} from "react-router-dom";
// import {Todolist2} from "./Todolist2";
// import {ThunkDispatch} from "redux-thunk";
// import {TodolistRootStateType} from "./store/storeToDoList2";
// import {AnyAction} from "redux";
// import {useDispatch} from "react-redux";
// import {initializeAppTC} from "./store/login-reducer";
//
//
// export const AppTodolist2 = React.memo(() => {
//
//     const dispatch: ThunkDispatch<TodolistRootStateType, unknown, AnyAction> = useDispatch();
//
//     useEffect(() => {
//         dispatch(initializeAppTC());
//     }, []);
//
//     return (
//         <div className={app.container}>
//             <LoginHeaderMenu/>
//             <div className={app.App}>
//                 <Routes>
//                     <Route path="/login" element={<LoginPage/>}/>
//                     <Route path="/" element={<Todolist2/>}/>
//                 </Routes>
//
//             </div>
//         </div>
//     );
// })


import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type TodoType = {
    id: string;
    title: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    completed: boolean;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const todosAPI = {
    getTodos() {
        return instance.get<TodoType[]>("todos");
    },
    changeTodoStatus(id: string, completed: boolean) {
        return instance.put(`todos/${id}`, { completed });
    },
};

// Reducer
const initState = [] as TodoType[];

type InitStateType = typeof initState;

const todosReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case "TODOS/GET-TODOS":
            return action.todos;

        case "TODOS/CHANGE-TODO-STATUS":
            return state.map((t) => {
                if (t.id === action.todo.id) {
                    return { ...t, completed: action.todo.completed };
                } else {
                    return t;
                }
            });

        default:
            return state;
    }
};

const getTodosAC = (todos: TodoType[]) => ({ type: "TODOS/GET-TODOS", todos }) as const;
const changeTodoStatusAC = (todo: TodoType) =>
    ({ type: "TODOS/CHANGE-TODO-STATUS", todo }) as const;
type ActionsType = ReturnType<typeof getTodosAC> | ReturnType<typeof changeTodoStatusAC>;

// Thunk
const getTodosTC = (): AppThunk => (dispatch) => {
    todosAPI.getTodos().then((res) => {
        dispatch(getTodosAC(res.data));
    });
};

const changeTodoStatusTC =
    (id: string, completed: boolean): AppThunk =>
        (dispatch) => {
            todosAPI.changeTodoStatus(id, completed).then((res) => {
                dispatch(changeTodoStatusAC(res.data));
            });
        };

// Store
const rootReducer = combineReducers({
    todos: todosReducer,
});

export const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// App
export const App = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosTC());
    }, []);

    const changeStatusHandler = (id: string, completed: boolean) => {
        dispatch(changeTodoStatusTC(id, completed));
    };

    return (
        <>
            <h2>✅ Список тудулистов</h2>
            {todos.length ? (
                todos.map((t) => {
                    return (
                        <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
                            <input
                                type="checkbox"
                                checked={t.completed}
                                onChange={() => changeStatusHandler(t.id, !t.completed)}
                            />
                            <b>Описание</b>: {t.title}
                        </div>
                    );
                })
            ) : (
                <h2>Тудулистов нету 😥</h2>
            )}
        </>
    );
};
