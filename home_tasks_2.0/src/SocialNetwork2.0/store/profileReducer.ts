import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type InitialStateProfileType = typeof initialProfileState
type ActionsProfileType =
    | ReturnType<typeof addPostAC2>
    | ReturnType<typeof getUserProfileAC>
    | ReturnType<typeof getUserStatusAC>
    | ReturnType<typeof updateUserStatusAC>
    | ReturnType<typeof isFetchingAC>


const ADD_POST = 'ADD-POST'
const GET_USER_PROFILE = 'GET-USER-PROFILE'
const GET_USER_STATUS = 'GET-USER-STATUS'
const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS'
const ISFETCING = 'ISFETCING'


export type PostType = {
    id: number
    message: string
    like: number,

}
export type UserProfileType = {
    aboutMe: string;
    contacts: {
        facebook: string;
        website: string;
        vk: string;
        // и другие контактные данные
    };
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    photos: {
        small: string;
        large: string;
    };
    userId: number;
};

const initialProfileState = {
    posts: [
        {id: 1, message: 'hi all', like: 15},
        {id: 2, message: 'it is my first post', like: 23}
    ] as PostType[],
    profile: null as string | null,
    status: '',
    isFetching: false,
}

export const profileReducer2 = (state = initialProfileState, action: ActionsProfileType): InitialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: new Date().getTime(), message: action.profileTitle, like: 0}
            return {...state, posts: [...state.posts, newPost]}
        case 'GET-USER-PROFILE':
            return {...state, profile: action.profile}
        case "GET-USER-STATUS":
            return {...state, status: action.status}
        case 'UPDATE-USER-STATUS':
            return {...state, status: action.updatedStatus}
        case 'ISFETCING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}


export const addPostAC2 = (profileTitle: string) => ({type: ADD_POST, profileTitle} as const)
export const getUserProfileAC = (profile: string | null) => ({type: GET_USER_PROFILE, profile} as const)
export const getUserStatusAC = (status: string) => ({type: GET_USER_STATUS, status} as const)
export const updateUserStatusAC = (updatedStatus: string) => ({type: UPDATE_USER_STATUS, updatedStatus} as const)
const isFetchingAC = (isFetching: boolean) => ({type: ISFETCING, isFetching} as const)


//thunks
export const addPostTC = (profileTitle: string) => (dispatch: Dispatch<ActionsProfileType>) => {
    dispatch(addPostAC2(profileTitle))
}
export const getUserProfileTC = (userId: number) => (dispatch: Dispatch<ActionsProfileType>) => {
    dispatch(isFetchingAC(true))
    profileAPI.getUserProfile(userId)
        .then(data => {
            dispatch(isFetchingAC(false))
            dispatch(getUserProfileAC(data))
        })
}
export const getUserStatusTC = (userId: number) => (dispatch: Dispatch<ActionsProfileType>) => {
    profileAPI.getUserStatus(userId)
        .then(data => {
            dispatch(getUserStatusAC(data))
            console.log(data)
        })
}
export const updateUserStatusTC = (status: string) => (dispatch: Dispatch<ActionsProfileType>) => {
    profileAPI.updateUserStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(updateUserStatusAC(status))
            }
        })
}
