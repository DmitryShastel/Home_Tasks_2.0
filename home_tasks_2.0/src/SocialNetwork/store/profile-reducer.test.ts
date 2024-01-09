import {addPostAC, AddPostActionType, PostsType, profileReducer} from "./profileReducer";

describe('profileReducer add new post', () => {
    let InitialState: PostsType;

    beforeEach(() => {
        InitialState = {
            posts: [
                {id: 1, title: 'Test tile', likeCount: 'like185'},
                {id: 2, title: 'Test tile2', likeCount: 'like1'},
            ],
            newPostText: ''
        }
    })
    test('the new post should be added', () => {
        const newPost = 'Hello, it is a new post?';
        const action = addPostAC(newPost)

        const newState = profileReducer(InitialState, action)

        expect(newState.posts.length).toBe(3)
        expect(newState.posts[0].title).toBe(newPost)
    })
    test('should return the same state for unknown action type', () => {
        const action: AddPostActionType = {type: 'UNKNOWN_ACTION', newTitle: ''}
        const newState = profileReducer(InitialState, action)

        expect(newState).toEqual(InitialState);
    })
})


