import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({

})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const storeToDoList = createStore(rootReducer)