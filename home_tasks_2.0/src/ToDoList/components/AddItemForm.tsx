import React, {ChangeEventHandler, useState} from 'react';


type AddItemFormType = {
    callback: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {

    const [title, setTitle] = useState('')

    const addTitle = () => {
        props.callback(title)
        setTitle('')
        console.log(title)
    }


    const onchangeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div>
            <input
                value={title}
                onChange={onchangeInputHandler}
            />
            <button onClick={addTitle}>+</button>
        </div>
    );
};