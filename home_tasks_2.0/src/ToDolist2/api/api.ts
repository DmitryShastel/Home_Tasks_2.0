import axios from "axios";
import {ResponceType, TodolistType} from "../store/todolist-reducer2";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
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
        return axiosInstance.delete<ResponceType>(`/todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return axiosInstance.put<ResponceType>(`/todo-lists/${todolistId}`, {title: title})
            .then(res => res.data)
    },
    getTasks(todolistId: string) {
        return axiosInstance.get<any>(`/todo-lists/${todolistId}/tasks`)
    }
}

