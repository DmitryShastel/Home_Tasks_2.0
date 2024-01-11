import {TodolistsType} from "../AppRoot";
import {v1} from "uuid";

export type addToDoListACType = (titleTodolist: string) => AddTodolistActionType
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    titleTodolist: string
}


const InitialState: TodolistsType[] = []
export type ActionsType = AddTodolistActionType

export const todolistReducer = (state: TodolistsType[] = InitialState, action: ActionsType): TodolistsType[] => {
    switch (action.type) {
        case 'ADD-TODOLIST' : {
            debugger
            return [...state,
                {id: v1(), title: action.titleTodolist, filter: 'all'}
            ]
        }
        default:
            return state
    }
}

export const addToDoListAC: addToDoListACType = (titleTodolist: string): AddTodolistActionType => {
    return {
        type: 'ADD-TODOLIST',
        titleTodolist
    }
}

export const removeToDoListAC = () => {
    return {
        type: ''
    }
}

export const changeToDoListTitleAC = () => {
    return {
        type: ''
    }
}

export const changeToDoListFilterAC = () => {
    return {
        type: ''
    }
}