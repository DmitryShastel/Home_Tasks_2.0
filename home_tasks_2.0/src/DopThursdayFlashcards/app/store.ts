import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk, ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {decksReducer} from '../features/decks/decks-reducer'

const rootReducer = combineReducers({
  decksReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector



//old store
//@ts-ignore
// export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))