import {AlbumPhotoType, AlbumType, IUuser, PostsType, TodoType} from "../../models/IUuser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type UserState = {
    users: IUuser[]
    isLoading: boolean
    error: string
    userInfo: IUuser
    userTodo: TodoType[]
    albums: AlbumType[]
    albumPhoto: AlbumPhotoType[]
    posts: PostsType
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    userInfo: {} as IUuser,
    userTodo: [],
    albums: [],
    albumPhoto: [],
    posts: {} as PostsType
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },
        usersFetchingSuccess(state, action: PayloadAction<IUuser[]>) {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        userInfo(state, action: PayloadAction<IUuser>) {
            state.isLoading = false
            state.error = ''
            state.userInfo = action.payload
        },
        userTodo(state, action: PayloadAction<TodoType[]>) {
            state.isLoading = false
            state.error = ''
            state.userTodo = action.payload
        },
        userAlbum(state, action: PayloadAction<AlbumType[]>) {
            state.isLoading = false
            state.error = ''
            state.albums = action.payload
        },
        userPhoto(state, action: PayloadAction<AlbumPhotoType[]>) {
            state.isLoading = false
            state.error = ''
            state.albumPhoto = action.payload
        },
        userPosts(state, action: PayloadAction<PostsType>){
            state.isLoading = false
            state.error = ''
            state.posts = action.payload
        },
        createUserPost(state, action: PayloadAction<PostsType>){
            state.isLoading = false
            state.error = ''
            state.posts = action.payload
        },
        updateUserPost(state, action: PayloadAction<PostsType>){
            state.isLoading = false
            state.error = ''
            state.posts = action.payload
        },
        deleteUserPost(state, action: PayloadAction<PostsType>){
            state.isLoading = false
            state.error = ''
            state.posts = action.payload
        }
    }
})

export default userSlice.reducer
