import {Dispatch} from "redux";
import {decksApi} from "./decks-api";
import {setDecksAC, updateDecksAC} from "./decks-reducer";
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

export const UpdateDeckTC = (id: string, name: string) => (dispatch: AppDispatch) => {
    return decksApi.updateDeck(id, name).then((res) => {
        dispatch(updateDecksAC(id, name))
    })
}