import React from 'react';
import homePageStyle from './homePage.module.css'

export const HomePage = () => {
    return (
        <div >
            <div className={homePageStyle.header}>
                <img className={homePageStyle.img}
                     src='https://cdn.pixabay.com/photo/2021/11/06/09/39/yin-yang-6772875_960_720.png'/>
            </div>
            <div className={homePageStyle.homeBody}>body</div>
        </div>


    );
};