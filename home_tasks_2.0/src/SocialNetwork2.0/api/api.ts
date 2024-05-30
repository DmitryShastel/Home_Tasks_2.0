import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9f9da7ee-2def-4ec9-bde3-f37a343d34bd'
    }
})

export const userAPI = {
    getUsers(currentPage: number, perPage: number) {
        return axiosInstance.get(`users?page=${currentPage}&count=${perPage}`)
            .then(res => res.data)
    }
}

export const followAPI = {
    followUser(userId: number) {
        return axiosInstance.post(`follow/${userId}`)
            .then(res => res.data)
    },
    unFollowUser(userId: number) {
        return axiosInstance.delete(`follow/${userId}`, {})
            .then(res => res.data)
    }
}