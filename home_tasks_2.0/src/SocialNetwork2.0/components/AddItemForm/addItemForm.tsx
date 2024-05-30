import React, {ChangeEvent, useState} from 'react';
import {FormHelperText, TextField} from "@mui/material";
import {SuperButton} from "../SuperButon/superButton";


type AddItemFormPropsType = {
    callback: (title: string) => void
}


export const AddItemForm = (props: AddItemFormPropsType) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState<string | null>(null)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setValue(e.currentTarget.value)
    }

    const addItem = () => {
        if (value.trim() !== '') {
            props.callback(value)
            setValue('')
        } else {
            setError('Title is required')
        }
        console.log(value)
    }



    return (
        <>
                <div
                    style={{
                        display: 'flex',
                        margin: '15px',
                    }}>
                    <TextField
                        value={value}
                        onChange={onChangeHandler}
                        label="Enter text"
                        variant="outlined"
                        style={{
                            marginRight: '1ch',
                            border: error ? '1.5px solid red' : '',
                            borderRadius: error ? '4px' : 'none'
                        }}
                    />
                    <SuperButton callback={addItem} title={'Add message'}/>
                </div>
                <div style={{
                    display: 'flex',
                    margin: '15px',
                }}>
                    {error && <FormHelperText error style={{fontSize: '15px'}}>{error}</FormHelperText>}
                </div>
        </>
    );
};