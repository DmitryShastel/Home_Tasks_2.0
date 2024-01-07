import React from 'react';
import menuPageStyle from './menuPage.module.css'

export const MenuPage = () => {
    return (
        <>
            <div className={menuPageStyle.container}>
                <div className={menuPageStyle.links}>
                    <a>Profile</a>
                </div>
                <div className={menuPageStyle.links}>
                    <a>Message</a>
                </div>
                <div className={menuPageStyle.links}>
                    <a>Users</a>
                </div>
            </div>
        </>
    );
};