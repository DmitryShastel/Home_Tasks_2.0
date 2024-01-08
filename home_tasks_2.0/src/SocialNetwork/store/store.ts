import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";

export const rootReducer = combineReducers({
    posts: profileReducer,
    messages: messageReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)