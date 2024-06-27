import {Dispatch} from "redux";
import {todolistAPI} from "../api/api";


export type SetTodolistType = ReturnType<typeof setTodolistsAC>

type TodolistActionsType =
    | SetTodolistType

const SET_TODOLISTS = 'SET-TODOLISTS'

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
        default:
            return state
    }
}

export const setTodolistsAC = (todolists: TodolistType[]) => ({type: SET_TODOLISTS, todolists} as const)

export const setTodolistTC = () => (dispatch: Dispatch<TodolistActionsType>) => {
    return todolistAPI.getTodolist()
        .then((res) => {
            dispatch(setTodolistsAC(res.data))
        })
}