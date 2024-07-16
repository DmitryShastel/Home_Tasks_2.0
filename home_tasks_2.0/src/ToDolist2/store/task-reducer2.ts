import {Dispatch} from "redux";
import {todolistAPI} from "../api/api";
import {setTodolistType} from "./todolist-reducer2";
import {TodolistRootStateType} from "./storeToDoList2";


type TasksActionType =
    | ReturnType<typeof setTasksAC>
    | setTodolistType
    | ReturnType<typeof addTasksAC>
    | ReturnType<typeof removeTasksAC>
    | ReturnType<typeof updateTasksAC>

const SET_TASKS = 'SET-TASKS'
const ADD_TASK = 'ADD-TASKS'
const REMOVE_TASK = 'REMOVE-TASK'
const UPDATE_TASK = 'UPDATE-TASK'


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

export type UpdateTaskModelType = {
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}

export type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
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
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId) }
        case 'UPDATE-TASK':
            return {
                ...state, [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId ? {...t, ...action.model} : t)
            }
        default:
            return state
    }
}

export const setTasksAC = (tasks: TaskType[], todolistId: string) => ({type: SET_TASKS, tasks, todolistId} as const);
export const addTasksAC = (task: TaskType) => ({type: ADD_TASK, task} as const);
export const removeTasksAC = (todolistId: string, taskId: string) => ({type: REMOVE_TASK, todolistId, taskId} as const);
export const updateTasksAC = (todolistId: string, taskId: string, model: UpdateDomainTaskModelType) =>
    ({type: UPDATE_TASK, todolistId, taskId, model} as const);




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
export const removeTaskTC = (todolistId: string, taskId: string) => (dispatch: Dispatch<TasksActionType>) => {
return todolistAPI.removeTask(todolistId, taskId)
    .then(res => {
        dispatch(removeTasksAC(todolistId, taskId))
    })
}

export const updateTaskTC = (todolistId: string, taskId: string, domainModel: UpdateDomainTaskModelType) =>
    (dispatch: Dispatch<TasksActionType>, getState: () => TodolistRootStateType) => {
        const state = getState();
        const task = state.tasks[todolistId].find(t => t.id === taskId)
        if (!task) {
            console.warn('task not found in the state')
            return
        }

        const apiModel: UpdateTaskModelType = {
            title: task.title,
            status: task.status,
            deadline: task.deadline,
            description: task.description,
            priority: task.priority,
            startDate: task.startDate,
            ...domainModel
        }

        todolistAPI.updateTask(todolistId, taskId, apiModel)
            .then(res => {
                dispatch(updateTasksAC(todolistId, taskId, apiModel))
            })
}