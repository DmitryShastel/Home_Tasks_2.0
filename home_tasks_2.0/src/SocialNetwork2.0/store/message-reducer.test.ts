import {addMessageAC, InitialStateMessageType, messageReducer2} from "./messageReducer";

let InitialState: InitialStateMessageType;

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
    }
})

test('new message should be added', () => {

    const newMessage = 'Hello, how are you?';
    const action = addMessageAC(newMessage)

    const newState = messageReducer2(InitialState, action)

    expect(newState.messages.length).toBe(3)
    expect(newState.messages[2].message).toBe(newMessage)
})