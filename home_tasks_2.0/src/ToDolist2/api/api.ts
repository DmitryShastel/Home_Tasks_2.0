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
    }
}

