import axios from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9f9da7ee-2def-4ec9-bde3-f37a343d34bd'
    }
})


export const authAPI = {
    authMe() {
        return axiosInstance.get(`/auth/me`)
            .then(res => res.data)
    }
}

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
export const profileAPI = {
    getUserProfile(userId: number) {
        return axiosInstance.get(`profile/` + userId)
            .then(res => res.data)
    },
    getUserStatus(userId: number) {
        return axiosInstance.get(`profile/status/` + userId)
            .then(res => res.data)
    },
    updateUserStatus(status: string) {
        return axiosInstance.put(`/profile/status`, {status: status})
            .then(res => res.data)
    }
}

