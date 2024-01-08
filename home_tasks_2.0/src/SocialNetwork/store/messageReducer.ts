type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

type AddMessageACType = {
    type: 'ADD-MESSAGE',
    newMessage: string
}

type ActionsType = AddMessageACType
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


export const addMessageAC = (newMessage: string): AddMessageACType => {
    return {
        type: 'ADD-MESSAGE',
        newMessage
    }
}
