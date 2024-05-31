import {Dispatch} from "redux";

export type InitialStateProfileType = typeof initialProfileState
type ActionsProfileType = ReturnType<typeof addPostAC2>

const ADD_POST = 'ADD-POST'

export type PostType = {
    id: number
    message: string
    like: number
}

const initialProfileState = {
    posts: [
        {id: 1, message: 'hi all', like: 15},
        {id: 2, message: 'it is my first post', like: 23}
    ] as PostType[]
}

export const profileReducer2 = (state = initialProfileState, action: ActionsProfileType): InitialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: new Date().getTime(), message: action.profileTitle, like: 0}
            return {...state, posts: [...state.posts, newPost]}
        default:
            return state
    }
}

export const addPostAC2 = (profileTitle: string) => ({type: ADD_POST, profileTitle} as const)

export const addPostTC = (profileTitle: string) => (dispatch: Dispatch<ActionsProfileType>) => {
    dispatch(addPostAC2(profileTitle))
}