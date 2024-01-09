import React, {ChangeEvent, useState} from 'react';


type AddItemFormType = {
    callback: (title: string) => void
}


export const AddItemForm = (props: AddItemFormType) => {

    const [title, setTitle] = useState('')

    const addItem = () => {
        props.callback(title)
        setTitle('')
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div>
            <input
                value={title}
                onChange={onPostChangeHandler}
            />
            <div>
                <button onClick={addItem}>Add post</button>
            </div>
        </div>
    );
};
