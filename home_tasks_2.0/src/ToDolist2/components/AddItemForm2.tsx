import React, {ChangeEvent, useState} from 'react';
import todo from "./addItemForm2.module.css";

type AddItemForm2PropsType = {
    callback: (title: string) => void
}

export const AddItemForm2 = (props: AddItemForm2PropsType) => {

   const [title, setTitle] = useState<string>('')
   const [error, setError] = useState()


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addItemHandler = () => {
        props.callback(title)
        setTitle('')
        console.log(title)
    }

    return (
        <div className={todo.addItemForm}>
            <div>
                <input
                    value={title}
                    onChange={onChangeHandler}
                />
               <button onClick={addItemHandler}>+</button>
            </div>
        </div>
    );
};