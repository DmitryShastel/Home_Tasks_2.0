import {applyMiddleware, combineReducers, createStore} from "redux";
import {todolistReducer2} from "./todolist-reducer2";
import {thunk} from "redux-thunk";



export const rootTodolistReducer = combineReducers({
    todolists: todolistReducer2
})

//@ts-ignore
export const storeTodolist2 = createStore(rootTodolistReducer, applyMiddleware(thunk))
export type TodolistRootStateType = ReturnType<typeof rootTodolistReducer>

