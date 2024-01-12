import {TasksType} from "../AppRoot";
import {v1} from "uuid";

let todolistId1 = v1()

export type AddTaskACType = (todolistId: string, taskTitle: string) => AddTaskActionType
export type AddTaskActionType = {
    type: 'ADD-TASK'
    todolistId: string
    taskTitle: string
}
export type RemoveTaskACType = (todolistId: string, taskId: string) => RemoveTaskActionType
export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskId: string
}

const InitialState: TasksType = {}
export type ActionsType = AddTaskActionType | RemoveTaskActionType

export const tasksReducer = (state: TasksType = InitialState, action: ActionsType): TasksType => {
    switch (action.type) {
        case "ADD-TASK": {
            const tasks = state[action.todolistId] || [];
            const newTask = {id: v1(), title: action.taskTitle, isDone: false};
            return {
                ...state,
                [action.todolistId]: [...tasks, newTask],
            };
        }
        case 'REMOVE-TASK': {
            const updatedTasks = state[action.todolistId].filter(task => task.id !== action.taskId)
            return {
                ...state,
                [action.todolistId]: updatedTasks
            }
        }
        default:
            return state
    }
}

export const addTaskAC: AddTaskACType = (todolistId: string, taskTitle: string): AddTaskActionType => {
    return {
        type: 'ADD-TASK',
        todolistId,
        taskTitle
    }
}
export const removeTaskAC: RemoveTaskACType = (todolistId: string, taskId: string): RemoveTaskActionType => {
    return {
        type: 'REMOVE-TASK',
        todolistId,
        taskId
    }
}

export const changeTaskTitleAC = () => {
    return {
        type: ''
    }
}
export const changeTaskStatusAC = () => {
    return {
        type: ''
    }
}