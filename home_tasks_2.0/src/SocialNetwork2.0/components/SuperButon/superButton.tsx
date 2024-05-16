import React from 'react';
import Button from "@mui/material/Button";

type SuperButtonPropsType = {
    title: string
    callback: () => void
}


export const SuperButton = (props: SuperButtonPropsType) => {
    return (
        <>
            <Button variant="outlined" style={{height: '55px'}} onClick={props.callback}>{props.title}</Button>
        </>
    );
};