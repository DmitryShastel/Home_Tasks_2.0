import axios from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9f9da7ee-2def-4ec9-bde3-f37a343d34bd'
    }
})


export const todolistAPI = {
    getTodolist() {
        return axiosInstance.get(`/todo-lists/`)
            .then(res => res.data)
        // .then(res => console.log(res))
    }
}