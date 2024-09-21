import s from './DeckItem.module.css'
import {Deck} from "../../decks-api";
import {useAppDispatch} from "../../../../app/store";
import {UpdateDeckTC} from "../../decks-thunks";
import {deleteDecksAC} from "../../decks-reducer";

type DeckProps = {
    //deck: any // todo: fix
    deck: Deck
}

const TEST_ACC_NAME = 'kukus'

export const DeckItem = ({deck}: DeckProps) => {
    const isTestingDeck = deck.author.name === TEST_ACC_NAME

    const dispatch = useAppDispatch()

    const updateHandler = () => {
        console.log(deck.id, deck.name)
        dispatch(UpdateDeckTC(deck.id, deck.name))
    }


    const deleteHandler = () => {
        dispatch(deleteDecksAC(deck.id))
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

            {(
                <div className={s.buttonBox}>
                    <button>update</button>
                    <button>delete</button>
                </div>
            )}

            {isTestingDeck && (
                <div className={s.buttonBox}>
                    <button onClick={updateHandler}>update</button>
                    <button onClick={() => deleteHandler()}>delete</button>
                </div>
            )}
        </li>
    )
}
