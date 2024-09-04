import React from 'react';
import {useAppSelector} from "./hooks/redux";
import {UserList} from "./Pages/User/userList";
import {UserInfo} from "./Pages/User/userInfo";
import {Route, Routes, useLocation} from "react-router-dom";
import {TodoPage} from "./Pages/Todo/todoPage";
import {AlbumPage} from "./Pages/Album/albumPage";
import {UserPhoto} from "./Pages/Photo/userPhoto";
import {UserPosts} from "./Pages/Posts/userPosts";

export const AppReduxToolkit = () => {

    const {isLoading, error} = useAppSelector(state => state.userReducer)
    const location = useLocation();
    const isUserInfoPage = location.pathname.includes('/users/');
    const isUserPostsPage = location.pathname.includes('/posts/');

    return (
        <div>
            {isLoading && <h3>Downloading . . .</h3>}
            {error && <h3>{error}</h3>}
            <>
                {!isUserInfoPage && !isUserPostsPage && <UserList/>}
            </>

            <Routes>
                <Route path='/users/:userId' element={<UserInfo/>}></Route>
                <Route path='/users/:userId/todos' element={<TodoPage/>}></Route>
                <Route path='/users/:userId/albums' element={<AlbumPage/>}></Route>
                <Route path='/albums/:albumsId/photos' element={<UserPhoto/>}></Route>
                <Route path='/posts/:userId' element={<UserPosts/>}></Route>
            </Routes>

        </div>
    );
};