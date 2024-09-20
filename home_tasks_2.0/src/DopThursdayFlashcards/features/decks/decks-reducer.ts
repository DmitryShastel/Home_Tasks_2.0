import {Deck} from "./decks-api";

const initialState = {
    //decks: [] as any[], // todo: add type
    decks: [] as Deck[],
    searchParams: {
        name: '',
    },
}

const SET_DECKS = 'SET-DECKS'

export type setDecksType = ReturnType<typeof setDecksAC>

type DecksState = typeof initialState
type DecksActions = setDecksType


export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case 'SET-DECKS' :
            return {...state, decks: action.decks}
        default:
            return state
    }
}


export const setDecksAC = (decks: Deck[]) => ({type: SET_DECKS, decks} as const)


