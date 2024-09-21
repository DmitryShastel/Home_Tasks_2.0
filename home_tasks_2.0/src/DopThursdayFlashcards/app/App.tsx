import './App.css'
import {Decks} from "../features/decks/Decks"
import {LinearLoader} from "../Common/components/Loader/LinearLoader";
import {useAppSelector} from "./store";
import {selectAppStatus} from "./app-selectors";
import {GlobalError} from "./GlobalError/GlobalError";


export const App = () => {

    const appStatus = useAppSelector(selectAppStatus)


    return (
        <div>
            {appStatus === 'loading' && <LinearLoader/>}
            <Decks/>
            <GlobalError/>
        </div>
    )
}
