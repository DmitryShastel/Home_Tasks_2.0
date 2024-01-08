import React from 'react';
import profilePageStyle from './profilePage.module.css'

export const ProfilePage = () => {


    const usersPost = [
        {id: 1, title: 'Test tile', likeCount: 'like185'},
        {id: 2, title: 'Test tile2', likeCount: 'like1'},
    ]

    const posts = usersPost.map((post) =>
        <div>
            <span></span>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'/>
            <div>{post.title}</div>
            <div>{post.likeCount}</div>
        </div>)

    return (
        <div>
            <img src='https://media.gettyimages.com/id/1366983055/photo/scenic-view-of-snow-covered-land-against-clear-blue-sky-schmerikon-switzerland.jpg?s=612x612&w=gi&k=20&c=RrIcuSymIsedaNW0z8NVIJ8B5F3cK4qVqD-rFXm53_Q='/>
            <div>
                <>Description</>
                <h4>My posts</h4>
            </div>

            <input/>
            <div>
                <button>Add post</button>
            </div>

            <div className={profilePageStyle.post}>
                {posts}
            </div>
        </div>
    );
};