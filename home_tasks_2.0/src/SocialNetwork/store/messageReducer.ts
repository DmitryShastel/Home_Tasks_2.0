type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}


export type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    newMessage: string
}

type AddMessageACType = (newMessage: string) =>  AddMessageActionType

type ActionsType = AddMessageActionType
const InitialState: DialogsType = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Alex'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'by'},
    ],
    newMessageText: ''
}


export const messageReducer = (state: DialogsType = InitialState, action: ActionsType): DialogsType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage = {id: new Date().getTime(), message: action.newMessage}
            return {
                ...state,
                messages: [ ...state.messages, newMessage]
            }
        }
        default:
            return state;
    }
}

export const addMessageAC: AddMessageACType = (newMessage: string): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE',
        newMessage
    }
}
