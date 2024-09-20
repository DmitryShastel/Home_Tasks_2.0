import {useAppDispatch, useAppSelector} from "../../../app/store";
import {useEffect} from "react";
import {FetchDecksTC} from "../decks-thunks";

export const useFetchDecks = () => {
    const dispatch = useAppDispatch()
    const decks = useAppSelector((state) => state.desks.decks)

    useEffect(() => {
        dispatch(FetchDecksTC())
    }, [])

    return {
        decks
    }
}