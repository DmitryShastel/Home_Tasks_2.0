import {AppDispatch} from "../store";
import {userSlice} from "./userSlice";
import {userApi} from "../../api/api-toolkit";
import axios from "axios";
import {IUuser} from "../../models/IUuser";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        // const response = await axios.get<IUuser[]>('https://jsonplaceholder.typicode.com/albums/1/photos')
        // dispatch(userSlice.actions.usersFetchingSuccess(response.data))
        // console.log(response)
        const response = await userApi.getUsersList()
        dispatch(userSlice.actions.usersFetchingSuccess(response))
    } catch (e: any) {
        console.log(e)
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
export const fetchUserInfo = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await userApi.getUserInfo(userId)
        dispatch(userSlice.actions.userInfo(response))
    } catch (e: any) {
        console.log(e)
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
export const fetchUserTodo = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await userApi.getUserTodo(userId)
        dispatch(userSlice.actions.userTodo(response))
    } catch (e: any) {
        console.log(e)
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
export const fetchUserAlbum = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await userApi.getUserAlbums(userId)
        dispatch(userSlice.actions.userAlbum(response))
    } catch (e: any) {
        console.log(e)
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
export const fetchUserAlbumPhoto = (albumsId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await userApi.getUserPhoto(albumsId)
        dispatch(userSlice.actions.userPhoto(response))
    } catch (e: any) {
        console.log(e)
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
export const fetchUserPosts = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await userApi.getUserPosts(userId)
        dispatch(userSlice.actions.userPosts(response))
    } catch (e: any) {
        console.log(e)
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}


export const createUserPost = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await userApi.createUserPost()
        dispatch(userSlice.actions.createUserPost(response))
    } catch (e: any) {
        console.log(e)
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
export const updateUserPost = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await userApi.updateUserPost(userId)
        dispatch(userSlice.actions.createUserPost(response))
    } catch (e: any) {
        console.log(e)
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
export const deleteUserPost = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await userApi.deleteUserPost(userId)
        dispatch(userSlice.actions.deleteUserPost(response))
    } catch (e: any) {
        console.log(e)
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}