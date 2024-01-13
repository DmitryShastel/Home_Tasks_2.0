import React, {useState} from 'react';
import addItemFormStyles from './addItemForm.module.css'

type AddItemFormType = {
    callback: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addTitle = () => {
        if (title.trim() !== '') {
            props.callback(title)
            setTitle('')
        } else {
            setError('This is required')
        }
    }


    const onchangeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null)
    }
    const onBlurHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === '') {
            setError('This is required')
        }
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.callback(title)
            setTitle('')
        }
    }


    return (
        <div className={addItemFormStyles.container}>
            <div className={error ? addItemFormStyles.styles : ''}>

                <input
                    onBlur={onBlurHandler}
                    value={title}
                    onChange={onchangeInputHandler}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={addTitle}>+</button>

            </div>
            {
                error && <div className={addItemFormStyles.styles}>{error}</div>
            }
        </div>
    );
};