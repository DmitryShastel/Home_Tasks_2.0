import axios from "axios";
import {AlbumPhotoType, AlbumType, IUuser, PostsType, TodoType} from "../models/IUuser";


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})


export const userApi = {
    getUsersList() {
        return axiosInstance.get<IUuser[]>('users')
            .then(res => res.data)
    },
    getUserInfo(userId: number) {
        return axiosInstance.get<IUuser>(`users/` + userId)
            .then(res => res.data)
    },
    getUserTodo(userId: number) {
        return axiosInstance.get<TodoType[]>(`/users/${userId}/todos`)
            .then(res => res.data)
    },
    getUserAlbums(userId: number) {
        return axiosInstance.get<AlbumType[]>(`/users/${userId}/albums`)
            .then(res => res.data)
    },
    getUserPhoto(albumsId: number) {
        return axiosInstance.get<AlbumPhotoType[]>(`/albums/${albumsId}/photos`)
            .then(res => res.data)
    },
    getUserPosts(userId: number) {
        return axiosInstance.get<PostsType>(`/posts/${userId}`)
            .then(res => res.data)
    },
    createUserPost() {

        const newPost = {
            userId: 1010,
            id: 1010,
            title: 'test title',
            body: 'test body'
        }

        return axiosInstance.post<PostsType>(`/posts`, newPost)
            .then(res => res.data)
    },
    updateUserPost(userId: number) {
        const newPost = {
            userId: 1010,
            id: 1010,
            title: 'test title2',
            body: 'test body2'
        }

        return axiosInstance.put<PostsType>(`/posts/${userId}`, newPost)
            .then(res => res.data)
    },

    deleteUserPost(userId: number) {
        return axiosInstance.delete<PostsType>(`/posts/${userId}`, {})
            .then(res => res.data)
    },
}


