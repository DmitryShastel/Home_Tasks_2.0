import React from 'react';
import menuPageStyle from './menuPage.module.css'
import {NavLink, Outlet} from "react-router-dom";

export const MenuPage = () => {

    const pathProfile = '/profile';
    const pathMessage = '/message';
    const pathUser = '/users';


    return (
        <>
            <div className={menuPageStyle.homeBody}>
                <div className={menuPageStyle.menuPage}>
                    <div className={menuPageStyle.links}>
                        <NavLink
                            to={pathProfile}
                            className={navData => navData.isActive ? menuPageStyle.active : menuPageStyle.menuLink}
                        >Profile</NavLink>
                    </div>
                    <div className={menuPageStyle.links}>
                        <NavLink
                            to={pathMessage}
                            className={navData => navData.isActive ? menuPageStyle.active : menuPageStyle.menuLink}
                        >Message</NavLink>
                    </div>
                    <div className={menuPageStyle.links}>
                        <NavLink
                            to={pathUser}
                            className={navData => navData.isActive ? menuPageStyle.active : menuPageStyle.menuLink}
                        >Users</NavLink>
                    </div>
                </div>
                <div className={menuPageStyle.content}><Outlet/></div>
            </div>
        </>
    );
};





