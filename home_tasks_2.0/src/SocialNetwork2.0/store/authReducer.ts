import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type InitialStateAuthType = typeof initialAuthState
type ActionsAuthType = ReturnType<typeof setAuthDataAC>

const SET_AUTH_DATA = 'SET-AUTH-DATA'


const initialAuthState = {
    authMe: false,
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
}

export const authReducer = (state = initialAuthState, action: ActionsAuthType): InitialStateAuthType => {
    switch (action.type) {
        case 'SET-AUTH-DATA':
            return {...state, ...action.data, authMe: true}
        default:
            return state
    }
}


const setAuthDataAC = (id: number | null, email: string | null, login: string | null) =>
    ({
        type: SET_AUTH_DATA, data: {
            id,
            email,
            login
        }
    } as const)

export const setAuthDataTC = () => (dispatch: Dispatch<ActionsAuthType>) => {
     return authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthDataAC(id, email, login));
            }
        })
}