import React from 'react';
import s from './button.module.css'


type SuperButtonType = {
    title: string
    callback: (...args: any[]) => void
}


export const SuperButton = (props: SuperButtonType) => {
    return (
        <div>
            <button
                className={s.button}
                onClick={props.callback}>
                {props.title}
            </button>
        </div>
    );
};