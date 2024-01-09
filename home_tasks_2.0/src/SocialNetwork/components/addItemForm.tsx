import React, {ChangeEvent, useState} from 'react';
import addItemFormStyle from './addItemForm.module.css'

type AddItemFormType = {
    callback: (title: string) => void
}


export const AddItemForm = (props: AddItemFormType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== '') {
            props.callback(title)
            setTitle('')
        } else {
            setError('Enter the text')
        }
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent | React.KeyboardEvent) => {
        if (error !== null) {
            setError(null)
        }
        if (e.keyCode === 13) {
            addItem()
        }
    }

    return (
        <div>
            <input
                value={title}
                onChange={onPostChangeHandler}
                className={error ? addItemFormStyle.errorInput : ''}
                onKeyDown={onKeyPressHandler}
            />
            {error && <div className={addItemFormStyle.errorMessage}>{error}</div>}
            <div>
                <button onClick={addItem}>Add post</button>
            </div>
        </div>
    );
};
