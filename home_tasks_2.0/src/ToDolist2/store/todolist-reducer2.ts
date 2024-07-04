import {Dispatch} from "redux";
import {todolistAPI} from "../api/api";


export type SetTodolistType = ReturnType<typeof setTodolistsAC>
export type addTodolistType = ReturnType<typeof addTodolistAC>
export type deleteTodolistType = ReturnType<typeof deleteTodolistAC>
export type updateTodolistType = ReturnType<typeof updateTodolistAC>

type TodolistActionsType =
    | SetTodolistType
    | addTodolistType
    | deleteTodolistType
    | updateTodolistType

//const SET_TODOLISTS = 'SET-TODOLISTS'
//const ADD_TODOLIST = 'ADD-TODOLIST'

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type ResponceType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: FieldErrorType[]
    data: D
}
type FieldErrorType = {
    error: string
    field: string
}

const initialTodolistState: TodolistDamainType[] = []

export type FilterType = 'all' | 'active' | 'completed'
export type TodolistDamainType = TodolistType & {
    filter: FilterType
    //entityStatus: RequestStatusType
}

// [
//     {id: 'qaz', title: 'Todolist1', filter: 'all'},
//     {id: 'wsx', title: 'Todolist2', filter: 'all'},
// ]

export const todolistReducer2 = (state: TodolistDamainType[] = initialTodolistState, action: TodolistActionsType): TodolistDamainType[] => {
    switch (action.type) {
        case 'SET-TODOLISTS':
            return action.todolists.map(tl => ({...tl, filter: "all"}));
        case 'ADD-TODOLIST' :
            return [{...action.todolist, filter: "all",}, ...state]
        case 'DELETE-TODOLIST':
            return state.filter(el => el.id !== action.todolistId)
        case 'UPDATE-TODOLIST':
            return state.map(el => el.id === action.todolistId ? {...el, title: action.title} : el)
        default:
            return state
    }
}

//funks
export const setTodolistsAC = (todolists: TodolistType[]) => ({type: 'SET-TODOLISTS', todolists} as const)
export const addTodolistAC = (todolist: TodolistType) => ({type: 'ADD-TODOLIST', todolist} as const)
export const deleteTodolistAC = (todolistId: string) => ({type: 'DELETE-TODOLIST', todolistId} as const)
export const updateTodolistAC = (todolistId: string, title: string) => ({
    type: 'UPDATE-TODOLIST',
    todolistId,
    title
} as const)


//thunks
export const setTodolistTC = () => (dispatch: Dispatch<TodolistActionsType>) => {
    return todolistAPI.getTodolist()
        .then((res) => {
            dispatch(setTodolistsAC(res.data))
        })
}
export const addTodolistTC = (todolistTitle: string) => (dispatch: Dispatch<TodolistActionsType>) => {
    return todolistAPI.addTodolist(todolistTitle)
        .then(res => {
            dispatch(addTodolistAC(res.data.data.item))
        })
}
export const deleteTodolistTC = (todolistId: string) => (dispatch: Dispatch<TodolistActionsType>) => {
    return todolistAPI.deleteTodolist(todolistId)
        .then((res) => {
            dispatch(deleteTodolistAC(todolistId))
        })
}
export const updateTodolistTC = (todolistId: string, title: string) => (dispatch: Dispatch<TodolistActionsType>) => {
    return todolistAPI.updateTodolist(todolistId, title)
        .then((res) => {
            dispatch(updateTodolistAC(todolistId, title))
        })
}

