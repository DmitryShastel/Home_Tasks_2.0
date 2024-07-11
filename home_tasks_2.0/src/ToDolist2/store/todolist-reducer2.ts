import {Dispatch} from "redux";
import {todolistAPI} from "../api/api";


export type setTodolistType = ReturnType<typeof setTodolistsAC>
export type addTodolistType = ReturnType<typeof addTodolistAC>
export type deleteTodolistType = ReturnType<typeof deleteTodolistAC>
export type updateTodolistType = ReturnType<typeof updateTodolistAC>
export type filterTodolistType = ReturnType<typeof filterTodolistAC>

type TodolistActionsType =
    | setTodolistType
    | addTodolistType
    | deleteTodolistType
    | updateTodolistType
    | filterTodolistType

const SET_TODOLISTS = 'SET-TODOLISTS'
const ADD_TODOLIST = 'ADD-TODOLIST'
const DELETE_TODOLIST = 'DELETE-TODOLIST'
const UPDATE_TODOLIST = 'UPDATE-TODOLIST'
const FILTER_TODOLIST = 'FILTER-TODOLIST'

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

export type FilterType = 'All' | 'Active' | 'Complete'
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
            return action.todolists.map(tl => ({...tl, filter: "All"}));
        case 'ADD-TODOLIST' :
            return [{...action.todolist, filter: "All",}, ...state]
        case 'DELETE-TODOLIST':
            return state.filter(el => el.id !== action.todolistId)
        case 'UPDATE-TODOLIST':
            return state.map(el => el.id === action.todolistId ? {...el, title: action.title} : el)
        case 'FILTER-TODOLIST':
            return state.map(el => el.id === action.todolistId ? {...el, filter: action.filter} : el )
        default:
            return state
    }
}

//funks
export const setTodolistsAC = (todolists: TodolistType[]) => ({type: SET_TODOLISTS, todolists} as const)
export const addTodolistAC = (todolist: TodolistType) => ({type: ADD_TODOLIST, todolist} as const)
export const deleteTodolistAC = (todolistId: string) => ({type: DELETE_TODOLIST, todolistId} as const)
export const updateTodolistAC = (todolistId: string, title: string) => ({
    type: UPDATE_TODOLIST,
    todolistId,
    title
} as const)
export const filterTodolistAC = (todolistId: string, filter: FilterType) => ({
    type: FILTER_TODOLIST,
    todolistId,
    filter
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

