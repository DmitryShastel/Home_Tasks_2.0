import {applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer2} from "./messageReducer";
import {thunk} from "redux-thunk";
import {userReducer2} from "./userReducer";
import {profileReducer2} from "./profileReducer";

export const rootReducer2 = combineReducers({
    messages: messageReducer2,
    users: userReducer2,
    posts: profileReducer2
})


//@ts-ignore
export const storeSocialNetwork2 = createStore(rootReducer2, applyMiddleware(thunk))
export type AppRootStateType2 = ReturnType<typeof rootReducer2>