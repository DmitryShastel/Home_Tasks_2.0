import s from './DeckItem.module.css'
import {Deck} from "../../decks-api";
import {useAppDispatch} from "../../../../app/store";
import {useState} from "react";
import {deleteDeckTC, updateDeckTC} from "../../decks-thunks";

type DeckProps = {
    deck: Deck
}


//добавляем значение Author: в переменную с фронта из колоды, что бы менять/удалять колоды только из своего аккаунта
const TEST_ACC_NAME = 'Nik-Kik-Shpink'

export const DeckItem = ({deck}: DeckProps) => {
    const isTestingDeck = deck.author.name === TEST_ACC_NAME

    const dispatch = useAppDispatch()

    const [isLoading, setIsLoading] = useState(false)

    const updateHandler = () => {
        setIsLoading(true)
        dispatch(updateDeckTC({id: deck.id, name: `${deck.name} updated`})).finally(() => {
            setIsLoading(false)
        })
    }


    const deleteHandler = () => {
        setIsLoading(true)
        dispatch(deleteDeckTC(deck.id)).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <li className={s.item}>
            <h3 className={s.title}>
                {deck.name}
                {isTestingDeck && '✨'}
            </h3>
            <p className={s.characteristic}>
                <b>Author:</b> {deck.author.name}
            </p>
            <p className={s.characteristic}>
                <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
            </p>
            <p className={s.characteristic}>
                <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
            </p>
            {isTestingDeck && (
                <div className={s.buttonBox}>
                    <button
                        disabled={isLoading}
                        onClick={updateHandler}>
                        update
                    </button>
                    <button
                        disabled={isLoading}
                        onClick={() => deleteHandler()}>
                        delete
                    </button>
                </div>
            )}
        </li>
    )
}