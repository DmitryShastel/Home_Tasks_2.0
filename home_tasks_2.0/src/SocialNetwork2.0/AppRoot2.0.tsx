import React from 'react';
import {HeaderPage} from "./Pages/Header/headerPage";
import {MenuPage} from "./Pages/Menu/menuPage";
import {Route, Routes} from "react-router-dom";
import {MessagePage} from "./Pages/Messages/messagePage";
import {ProfilePage} from "./Pages/Profile/profilePage";
import {NewsPage} from "./Pages/News/newsPage";
import {UsersPage} from "./Pages/Users/usersPage";
import {MusicPage} from "./Pages/Music/musicPage";
import {SettingsPage} from "./Pages/Settings/settingsPage";
import {LoginPage} from "./Pages/Login/loginPage";
import {NotFoundPage} from "./Pages/NotFound/notFoundPage";
import {HomePage} from "./Pages/HomePage/homePage";


export const AppRootSN2_0 = () => {
    return (
        <>
            <HeaderPage/>
            <MenuPage/>

            <Routes>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/message" element={<MessagePage/>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/music" element={<MusicPage/>}/>
                <Route path="/settings" element={<SettingsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </>
    );
};


