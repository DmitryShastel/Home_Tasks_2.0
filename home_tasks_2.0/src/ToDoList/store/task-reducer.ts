import {TasksType} from "../AppRoot";
import {v1} from "uuid";

let todolistId1 = v1()

export type AddTaskACType = (todolistId: string, taskTitle: string) => AddTaskActionType
export type AddTaskActionType = {
    type: 'ADD-TASK'
    todolistId: string
    taskTitle: string
}

const InitialState: TasksType = {}
export type ActionsType = AddTaskActionType

export const tasksReducer = (state: TasksType = InitialState, action: ActionsType): TasksType => {
    switch (action.type) {
        case "ADD-TASK": {
            const tasks = state[action.todolistId] || [];
            const newTask = {id: v1(), title: action.taskTitle, isDone: false};
            return {
                ...state,
                [action.todolistId]: [...tasks, newTask], // Добавляем новую задачу в конец массива задач для todolistId
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
export const removeTaskAC = () => {
    return {
        type: ''
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