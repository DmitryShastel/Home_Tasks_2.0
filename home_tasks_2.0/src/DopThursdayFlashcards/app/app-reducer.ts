export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
}

const SET_STATUS_APP = 'SET-STATUS-APP'
type AppStateType = typeof initialState

export type setAppStatusType = ReturnType<typeof setAppStatusAC>
type ActionsType = setAppStatusType

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case 'SET-STATUS-APP':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: SET_STATUS_APP, status} as const)

