import axios from "axios";
import {ResponceType, TodolistType} from "../store/todolist-reducer2";
import {TaskType} from "../store/task-reducer2";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        'API-KEY': '9f9da7ee-2def-4ec9-bde3-f37a343d34bd'
    }
})

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

export type modelType = {
    title: string
    description: string
    completed: boolean
    status: TaskStatuses
    priority: TaskPriorities
    // status: number
    // priority: number
    startDate: string
    deadline: string
}

export type UpdateTaskModelType = {
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export const todolistAPI = {
    getTodolist() {
        return axiosInstance.get<TodolistType[]>(`/todo-lists/`)
    },
    addTodolist(todolistTitle: string) {
        return axiosInstance.post<ResponceType<{ item: TodolistType }>>(`todo-lists`, {title: todolistTitle})
    },
    deleteTodolist(todolistId: string) {
        return axiosInstance.delete<ResponceType<{ item: TodolistType }>>(`/todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return axiosInstance.put<ResponceType<{ item: TodolistType }>>(`/todo-lists/${todolistId}/`, {title})
    },
    getTasks(todolistId: string) {
        return axiosInstance.get<any>(`/todo-lists/${todolistId}/tasks`)
    },
    addTask(todolistId: string, title: string) {
        return axiosInstance.post<ResponceType<{ item: TaskType }>>(`/todo-lists/${todolistId}/tasks`, {title})
    },
    removeTask(todolistId: string, taskId: string) {
        return axiosInstance.delete(`/todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        return axiosInstance.put<any>(`/todo-lists/${todolistId}/tasks/${taskId}`, model)
    },
    getAuth() {
        return axiosInstance.get(`/auth/me`)
    },
    loginAuth(data: LoginDataType) {
        return axiosInstance.post<ResponceType<{ userId: string }>>(`/auth/login`, data)
    },
    logUotAuth() {
        return axiosInstance.delete(`/auth/login`)
    }
}