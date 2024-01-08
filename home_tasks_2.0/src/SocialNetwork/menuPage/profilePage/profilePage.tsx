import React, {ChangeEvent, useState} from 'react';
import profilePageStyle from './profilePage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {addPostAC} from "../../store/profileReducer";


export const ProfilePage = () => {

    const [postTitle, setPostTitle] = useState('')

    const dispatch = useDispatch()
    const posts = useSelector((state: AppRootStateType) => state.posts.posts)

    const postsItem = posts.map((post) =>
        <div>
            <span></span>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'/>
            <div>{post.title}</div>
            <div>{post.likeCount}</div>
        </div>)


    const addPost = () => {
        dispatch(addPostAC(postTitle))
        setPostTitle('')
    }
    const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPostTitle(e.currentTarget.value)
    }

    return (
        <div>
            <img
                src='https://media.gettyimages.com/id/1366983055/photo/scenic-view-of-snow-covered-land-against-clear-blue-sky-schmerikon-switzerland.jpg?s=612x612&w=gi&k=20&c=RrIcuSymIsedaNW0z8NVIJ8B5F3cK4qVqD-rFXm53_Q='/>
            <div>
                <>Description</>
                <h4>My posts</h4>
            </div>
            <input
                value={postTitle}
                onChange={onPostChangeHandler}
            />
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={profilePageStyle.post}>
                {postsItem}
            </div>
        </div>
    );
};