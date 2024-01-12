import {TodolistsType} from "../AppRoot";
import {v1} from "uuid";

export type AddToDoListACType = (titleTodolist: string) => AddTodolistActionType
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    titleTodolist: string
}
export type RemoveToDoListACType = (titleTodolist: string) => RemoveToDoListActionType
export type RemoveToDoListActionType = {
    type: 'REMOVE-TODOLIST',
    todolistId: string
}

const InitialState: TodolistsType[] = []
export type ActionsType = AddTodolistActionType | RemoveToDoListActionType

export const todolistReducer = (state: TodolistsType[] = InitialState, action: ActionsType): TodolistsType[] => {
    switch (action.type) {
        case 'ADD-TODOLIST' : {
            return [...state,
                {id: v1(), title: action.titleTodolist, filter: 'all'}
            ]
        }
        case 'REMOVE-TODOLIST' : {
            return state.filter(todolist => todolist.id !== action.todolistId);
        }
        default:
            return state
    }
}

export const addToDoListAC: AddToDoListACType = (titleTodolist: string): AddTodolistActionType => {
    return {
        type: 'ADD-TODOLIST',
        titleTodolist
    }
}

export const removeToDoListAC: RemoveToDoListACType = (todolistId: string): RemoveToDoListActionType => {
    return {
        type: 'REMOVE-TODOLIST',
        todolistId
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