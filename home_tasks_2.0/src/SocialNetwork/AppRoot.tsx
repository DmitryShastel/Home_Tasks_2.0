import React from 'react';
import {Header} from "./homePage/header";
import {Route, Routes} from "react-router-dom";
import {ProfilePage} from "./menuPage/profilePage/profilePage";
import {MessagePage} from "./menuPage/messagePage/messagePage";
import {UserPage} from "./menuPage/userPage/userPage";
import {MenuPage} from "./menuPage/menuPage";
import {NotFoundPage} from "./menuPage/notFoundPage";


export const AppRoot = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<MenuPage/>}>
                    <Route path='/profile' element={<ProfilePage/>}/>
                    <Route path='/message' element={<MessagePage/>}/>
                    <Route path='/users' element={<UserPage/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
};


