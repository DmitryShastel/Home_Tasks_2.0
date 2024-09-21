import {Deck} from "./decks-api";

const initialState = {
    //decks: [] as any[], // todo: add type
    decks: [] as Deck[],
    searchParams: {
        name: '',
    },
}

const SET_DECKS = 'SET-DECKS'
const CREATE_DECK = 'CREATE-DECK'
const UPDATE_DECK = 'UPDATE-DECK'
const DELETE_DECK = 'DELETE-DECK'

export type setDecksType = ReturnType<typeof setDecksAC>
export type createDecksType = ReturnType<typeof createDecksAC>
export type updateDecksType = ReturnType<typeof updateDecksAC>
export type deleteDecksType = ReturnType<typeof deleteDecksAC>

type DecksState = typeof initialState
type DecksActions = setDecksType | createDecksType | updateDecksType | deleteDecksType


export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case 'SET-DECKS' :
            return {...state, decks: action.decks}
        case 'CREATE-DECK':
            return {...state, decks: [action.deck, ...state.decks]}
        case 'UPDATE-DECK':
            return {
                ...state,
                decks: state.decks.map(d => d.id === action.id ? {...d, name: action.name} : d)
            }
        case 'DELETE-DECK':
            return {
                ...state,
                decks: state.decks.filter(d => d.id !== action.id)
            }
        default:
            return state
    }
}


export const setDecksAC = (decks: Deck[]) => ({type: SET_DECKS, decks} as const)
export const createDecksAC = (deck: Deck) => ({type: CREATE_DECK, deck} as const)
export const updateDecksAC = (id: string, name: string) => ({type: UPDATE_DECK, id, name} as const)
export const deleteDecksAC = (id: string) => ({type: DELETE_DECK, id} as const)