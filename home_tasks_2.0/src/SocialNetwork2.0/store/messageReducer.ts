import {Dispatch} from "redux";

export type InitialStateMessageType = typeof initialState
type ActionsType = ReturnType<typeof addMessageAC>


const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Alex'},
    ],
    messages: [
        {id: 22, message: 'hi'},
        {id: 28, message: 'buy'},
    ]
}


export const messageReducer2 = (state = initialState, action: ActionsType): InitialStateMessageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {id: new Date().getTime(), message: action.messageTitle}
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export const addMessageAC = (messageTitle: string) => ({type: ADD_MESSAGE, messageTitle} as const)

export const addMessageTC = (messageTitle: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(addMessageAC(messageTitle))
}


