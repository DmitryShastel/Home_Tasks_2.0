import React from 'react';

type superButtonType = {
    title: string
    callback: () => void
}


export const SuperButton = (props: superButtonType) => {
    return (
        <button onClick={props.callback}>{props.title}</button>
    );
};