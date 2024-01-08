import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";

const rootReducer = combineReducers({
    posts: profileReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)