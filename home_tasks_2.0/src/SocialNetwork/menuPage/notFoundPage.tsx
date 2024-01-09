import React from 'react';
import notFoundPageStyle from './notFoundPage.module.css'
import {useNavigate} from "react-router-dom";

export const NotFoundPage = () => {

    const navigate = useNavigate();
    const handelGetHome = () => {
        setTimeout(() => {
            navigate('/')
        }, 500)
    }

    return (
        <div className={notFoundPageStyle.container}>
            <h1>Page not found</h1>
            <div>
                <button onClick={handelGetHome}>Get home</button>
            </div>
        </div>
    );
};