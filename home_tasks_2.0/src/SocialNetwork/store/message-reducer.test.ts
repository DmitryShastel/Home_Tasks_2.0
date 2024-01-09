import {addMessageAC, AddMessageActionType, DialogsType, messageReducer} from "./messageReducer";

describe('messageReducer', () => {
    let InitialState: DialogsType;

    beforeEach(() => {
        InitialState = {
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
    })
    test('the new message should be added', () => {
        const newMessage = 'Hello, how are you?';
        const action = addMessageAC(newMessage)

        const newState = messageReducer(InitialState, action)

        expect(newState.messages.length).toBe(3)
        expect(newState.messages[2].message).toBe(newMessage)
    })
    test('should return the same state for unknown action type', () => {
        const action: AddMessageActionType = {type: 'ADD-MESSAGE', newMessage: ''}
        const newState = messageReducer(InitialState, action)

        expect(newState).not.toEqual(InitialState);
    })
})


