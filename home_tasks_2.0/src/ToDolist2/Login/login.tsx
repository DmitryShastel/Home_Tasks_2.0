import React from 'react';
import login from './login.module.css';

export const Login = () => {
    return (
        <div className={login.container}>
            <div className={login.buttons}>
                <button>Login In</button>
                <button>Log out</button>
            </div>
        </div>
    );
};