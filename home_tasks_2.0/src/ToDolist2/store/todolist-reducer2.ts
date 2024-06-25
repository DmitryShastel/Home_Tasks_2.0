import {Dispatch} from "redux";
import {todolistAPI} from "../api/api";

export type InitialTodolistStateType = typeof initialTodolistState

type TodolistActionsType =
    | ReturnType<typeof setTodolistsAC>

const SET_TODOLISTS = 'SET-TODOLISTS'

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponceType<D> = {
    resultCode: number
    messages: string[]
    fieldsErrors: FieldErrorType[]
    data: D
}

// export type CreateTodolistResponseType = {
//     resultCode: number
//     messages: string[]
//     fieldsErrors: FieldErrorType[]
//     data: {
//         item: TodolistType
//     }
// }

type FieldErrorType = {
    error: string
    field: string
}

// export type UpdateTodolistResponseType = {
//     resultCode: number
//     messages: string[]
//     fieldsErrors: FieldErrorType[]
//     data: {}
// }

const initialTodolistState = {
    totolist: [] as TodolistType[]
}


export const todolistReducer2 = (state = initialTodolistState, action: TodolistActionsType): InitialTodolistStateType => {
    switch (action.type) {
        case "SET-TODOLISTS":
            return {...state, totolist: action.todolists}
        default:
            return state
    }
}

export const setTodolistsAC = (todolists: TodolistType[]) => ({type: SET_TODOLISTS, todolists} as const)

export const setTodolistTC = () => (dispatch: Dispatch<TodolistActionsType>) => {
    return todolistAPI.getTodolist()
        .then(data => {
            dispatch(setTodolistsAC(data))
        })
}