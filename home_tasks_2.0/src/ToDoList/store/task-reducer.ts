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

export type ChangeTaskStatusACType = (todolistId: string, taskId: string, isDone: boolean) => ChangeTaskStatusActionType
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    todolistId: string
    taskId: string
    isDone: boolean
}


const InitialState: TasksType = {}
export type ActionsType = AddTaskActionType | RemoveTaskActionType | ChangeTaskStatusActionType

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
        case 'CHANGE-TASK-STATUS': {
            const tasks = state[action.todolistId];
            const updatedTasks = tasks.map(task => {
                if (task.id === action.taskId) {
                    return {
                        ...task,
                        isDone: action.isDone,
                    };
                }
                return task;
            });
            return {
                ...state,
                [action.todolistId]: updatedTasks,
            };
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
export const changeTaskStatusAC: ChangeTaskStatusACType = (todolistId: string, taskId: string, isDone: boolean): ChangeTaskStatusActionType => {
    return {
        type: 'CHANGE-TASK-STATUS',
        todolistId,
        taskId,
        isDone
    }
}


export const changeTaskTitleAC = () => {
    return {
        type: ''
    }
}
