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
export type ChangeToDoListACType = (todolistId: string, titleTodolist: string) => ChangeToDoListActionType
export type ChangeToDoListActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    todolistId: string
    titleTodolist: string
}

const InitialState: TodolistsType[] = []
export type ActionsType = AddTodolistActionType | RemoveToDoListActionType | ChangeToDoListActionType

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
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(todolist => {
                if (todolist.id === action.todolistId) {
                    return {
                        ...todolist,
                        title: action.titleTodolist,
                    };
                }
                return todolist;
            });
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
export const changeToDoListTitleAC: ChangeToDoListACType = (todolistId: string, titleTodolist: string): ChangeToDoListActionType => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        todolistId,
        titleTodolist
    }
}

export const changeToDoListFilterAC = () => {
    return {
        type: ''
    }
}