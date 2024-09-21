import './App.css'
import {Decks} from "../features/decks/Decks"
import {LinearLoader} from "../Common/components/Loader/LinearLoader";
import {useAppSelector} from "./store";
import {selectAppStatus} from "./app-selectors";


export const App = () => {

    const appStatus = useAppSelector(selectAppStatus)

    return (
        <div>
            {appStatus === 'loading' && <LinearLoader/>}
            <Decks/>
        </div>
    )
}
