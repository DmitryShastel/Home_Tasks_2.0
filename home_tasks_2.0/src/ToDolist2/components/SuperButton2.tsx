import React from 'react';

type SuperButton2PropsType = {
    title: string
    callback: () => void
}


export const SuperButton2 = (props: SuperButton2PropsType) => {
    return (
        <>
            <button onClick={props.callback}>{props.title}</button>
        </>
    );
};