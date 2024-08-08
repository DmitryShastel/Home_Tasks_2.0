import {Dispatch} from "redux";
import {LoginDataType, todolistAPI} from "../api/api";

export type InitialAuthStateType = typeof intialAuthState

const SET_AUTH = 'SET-AUTH'
const SET_IS_INITIALIED = 'SET-IS-INITIALIED'


type AuthActionsType = ReturnType<typeof setAuthAC> | ReturnType<typeof setIsInitializedAC>

const intialAuthState = {
    isAuthMe: false,
    isInitialized: false
}


export const authReducer2 = (state = intialAuthState, action: AuthActionsType): InitialAuthStateType => {
    switch (action.type) {
        case "SET-AUTH":
            return {...state, isAuthMe: action.auth}
        case 'SET-IS-INITIALIED':
            return {...state, isInitialized: action.value}
        default:
            return state
    }
}


export const setAuthAC = (auth: boolean) => ({type: SET_AUTH, auth} as const)
export const setIsInitializedAC = (value: boolean) => ({type: SET_IS_INITIALIED, value} as const)


export const initializeAppTC = () => (dispatch: Dispatch) => {
    return todolistAPI.getAuth()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthAC(true))
            }
            dispatch(setIsInitializedAC(true))
        })

}
export const loginTC = (data: LoginDataType) => (dispatch: Dispatch<AuthActionsType>) => {
    return todolistAPI.loginAuth(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthAC(true))
            }
        })
}
export const logOutTC = () => (dispatch: Dispatch<AuthActionsType>) => {
    return todolistAPI.logUotAuth()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthAC(false))
            }
        })
}

