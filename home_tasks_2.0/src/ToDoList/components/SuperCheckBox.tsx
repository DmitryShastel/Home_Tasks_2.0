import React, {ChangeEvent, useState} from 'react';

type SuperCheckBoxType = {
    isDone: boolean
    callback: (checked: boolean) => void
}


export const SuperCheckBox = (props: SuperCheckBoxType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.callback(newIsDoneValue)
    }


    return (
        <div>
            <input type="checkbox" checked={props.isDone} onChange={onChangeHandler}/>
        </div>
    );
};