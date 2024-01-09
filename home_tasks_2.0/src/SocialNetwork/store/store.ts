import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    posts: profileReducer,
    messages: messageReducer,
    users: userReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)