import {Dispatch} from "redux";
import {todolistAPI} from "../api/api";
import {setTodolistType} from "./todolist-reducer2";


type TasksActionType =
    | ReturnType<typeof setTasksAC>
    | setTodolistType
    | ReturnType<typeof addTasksAC>

const SET_TASKS = 'SET-TASKS'
const ADD_TASKS = 'ADD-TASKS'


export enum TaskStatuses {
    New,
    InProgress,
    Completed,
    Draft
}

export enum TaskPriorities {
    Low,
    Middle,
    Hi,
    Urgently,
    Later
}

export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type TasksType = {
    [key: string]: TaskType[]
    //items: []
    // totalCount: number
    // error: null
}

// export type TasksType = Record<string | number, TaskType[]>;

export type InitialTasksStateType = typeof initialTasksState

const initialTasksState: TasksType = {}

// {
//     [todolistId1]: [
//     {id: 'qaz', title: 'test', status: 1, ... },
//     {id: 'wsx', title: 'test2', status: 1, ... },
// ],
//     [todolistId2]: [
//     {id: 'qaz2', title: 'test3', status: 1 },
//     {id: 'wsx2', title: 'test23', status: 1 },
// ],
// }


export const taskReducer2 = (state: TasksType = initialTasksState, action: TasksActionType): TasksType => {
    switch (action.type) {
        case 'SET-TASKS':
            return {...state, [action.todolistId]: action.tasks};
        case 'SET-TODOLISTS':
            const newState = {...state};
            action.todolists.forEach(tl => {
                newState[tl.id] = [];
            });
            return newState
        case 'ADD-TASKS':
            return {...state, [action.task.todoListId]: [action.task, ...state[action.task.todoListId]]}
        default:
            return state
    }
}

export const setTasksAC = (tasks: TaskType[], todolistId: string) => ({type: SET_TASKS, tasks, todolistId} as const);
export const addTasksAC = (task: TaskType) => ({type: ADD_TASKS, task} as const);

export const setTasksTC = (todolistId: string) => (dispatch: Dispatch<TasksActionType>) => {
    return todolistAPI.getTasks(todolistId)
        .then((res) => {
            dispatch(setTasksAC(res.data.items, todolistId))
        })
}

export const addTaskTC = (todolistId: string, title: string) => (dispatch: Dispatch<TasksActionType>) => {
    return todolistAPI.addTask(todolistId, title)
        .then(res => {
            dispatch(addTasksAC(res.data.data.item))
        })
}