import {Dispatch} from "redux";
import {followAPI, userAPI} from "../api/api";

export type InitialUsersStateType = typeof initialUsersState

type UsersActionsType =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof followUserAC>
    | ReturnType<typeof UnfollowUserAC>
    | ReturnType<typeof IsFetchingAC>
    | ReturnType<typeof isLoadingDataServerAC>

const SET_USERS = 'SET-USERS'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const ISFETCING = 'ISFETCING'
const IS_LOADING_DATA_SERVER = 'IS-LOADING-DATA-SERVER'

export type UserType = {
    id: number
    name: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
    photoUrl: string
    totalCount: number
    currentPage: number
    perPage: number
}

const initialUsersState = {
    users: [] as UserType[],
    photoUrl: 'https://hcgart.com/cdn/shop/products/DakotaRandall_AgentSmith.png?v=1639788688',
    totalCount: 0,
    currentPage: 1,
    perPage: 5,
    isFetching: false,
    isLoadingDataServer: [] as number[]
}


export const userReducer2 = (state = initialUsersState, action: UsersActionsType): InitialUsersStateType => {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.currentPage}
        case 'FOLLOW-USER' :
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }
        case 'UNFOLLOW-USER' :
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u
                })
            }
        case 'ISFETCING':
            return {...state, isFetching: action.isFetching}
        case 'IS-LOADING-DATA-SERVER' :
            return {
                ...state,
                isLoadingDataServer: action.isLoading
                    ? [...state.isLoadingDataServer, action.usersId]
                    : state.isLoadingDataServer.filter(id => id !== action.usersId)
            }
        default:
            return state
    }
}


export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setTotalCountAC = (currentPage: number) => ({type: SET_TOTAL_COUNT, currentPage} as const)
export const followUserAC = (userId: number) => ({type: FOLLOW_USER, userId} as const)
export const UnfollowUserAC = (userId: number) => ({type: UNFOLLOW_USER, userId} as const)
const IsFetchingAC = (isFetching: boolean) => ({type: ISFETCING, isFetching} as const)
const isLoadingDataServerAC = (isLoading: boolean, usersId: number) => ({
    type: IS_LOADING_DATA_SERVER,
    isLoading,
    usersId
} as const)

//thunks
export const setUsersTC = (currentPage: number, perPage: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(IsFetchingAC(true))
    return userAPI.getUsers(currentPage, perPage).then(data => {
        dispatch(IsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalCountAC(data.totalCount))
    })
}
export const followUsersTC = (userId: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(isLoadingDataServerAC(true, userId))
    return followAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(isLoadingDataServerAC(false, userId))
            dispatch(followUserAC(userId));
        }
    })
}
export const unFollowUsersTC = (userId: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(isLoadingDataServerAC(true, userId))
    return followAPI.unFollowUser(userId).then(data => {
        dispatch(isLoadingDataServerAC(false, userId))
        dispatch(UnfollowUserAC(userId))
    })
}