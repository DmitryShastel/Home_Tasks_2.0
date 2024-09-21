export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
}

const SET_STATUS_APP = 'SET-STATUS-APP'
const SET_ERROR_APP = 'SET-ERROR-APP'

type AppStateType = typeof initialState

export type setAppStatusType = ReturnType<typeof setAppStatusAC>
export type setAppErrorType = ReturnType<typeof setAppErrorAC>
type ActionsType = setAppStatusType | setAppErrorType

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case 'SET-STATUS-APP':
            return {...state, status: action.status}
        case 'SET-ERROR-APP': {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: SET_STATUS_APP, status} as const)
export const setAppErrorAC = (error: string | null) => ({type: SET_ERROR_APP, error} as const)