import {applyMiddleware, combineReducers, createStore} from "redux";
import {todolistReducer2} from "./todolist-reducer2";
import {thunk} from "redux-thunk";
import {taskReducer2} from "./task-reducer2";
import {authReducer2} from "./login-reducer";


export const rootTodolistReducer = combineReducers({
    todolists: todolistReducer2,
    tasks: taskReducer2,
    auth: authReducer2
})

//@ts-ignore
export const storeTodolist2 = createStore(rootTodolistReducer, applyMiddleware(thunk))
export type TodolistRootStateType = ReturnType<typeof rootTodolistReducer>

