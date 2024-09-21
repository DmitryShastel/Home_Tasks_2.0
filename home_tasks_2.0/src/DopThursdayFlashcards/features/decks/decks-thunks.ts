import {Dispatch} from "redux";
import {decksApi, UpdateDeckParams} from "./decks-api";
import {deleteDecksAC, setDecksAC, updateDecksAC} from "./decks-reducer";
import {AppDispatch} from "../../app/store";
import {setAppStatusAC} from "../../app/app-reducer";

export const FetchDecksTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await decksApi.fetchDecks();
        dispatch(setDecksAC(res.data.items));
        dispatch(setAppStatusAC('succeeded'))
    } catch (error) {
        dispatch(setAppStatusAC('failed'))
    }
}

export const AddDeckTC = (name: string) => (dispatch: AppDispatch) => {
    return decksApi.addDeck(name).then((res) => {
        dispatch(FetchDecksTC())
    })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
    return decksApi.updateDeck(params).then((res) => {
        dispatch(updateDecksAC(res.data))
    })
}

export const deleteDeckTC = (id: string) => (dispatch: AppDispatch) => {
    return decksApi.deleteDeck(id).then((res) => {
        dispatch(deleteDecksAC(res.data.id))
    })
}