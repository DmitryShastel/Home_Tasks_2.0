import {Dispatch} from "redux";
import {decksApi} from "./decks-api";
import {setDecksAC} from "./decks-reducer";


export const FetchDecksTC = () => (dispatch: Dispatch) => {
    return   decksApi.fetchDecks().then((res) => {
        dispatch(setDecksAC(res.data.items))
    })
}