export type PostType = {
    id: number
    title: string
    likeCount: string
}
export type PostsType = {
    posts: PostType[]
    newPostText: string
}
export type AddPostACType = (newTitle: string) => AddPostActionType
export type AddPostActionType = {
    // type: 'ADD-POST',
    type: string,
    newTitle: string
}


const InitialState: PostsType = {
    posts: [
        {id: 1, title: 'Test tile', likeCount: 'like185'},
        {id: 2, title: 'Test tile2', likeCount: 'like1'},
    ],
    newPostText: ''
}

export type ActionsType = AddPostActionType

export const profileReducer = (state: PostsType = InitialState, action: ActionsType): PostsType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {id: new Date().getTime(), title: action.newTitle, likeCount: '0'}
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }
        default:
            return state;
    }
}

export const addPostAC: AddPostACType = (newPostTitle: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        newTitle: newPostTitle
    }
}