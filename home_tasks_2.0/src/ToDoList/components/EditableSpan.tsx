import React, {ChangeEvent, useState} from 'react';

type EditableSpanType = {
    title: string
    callback: (newTitle: string) => void
}


export const EditableSpan = (props: EditableSpanType) => {

    console.log('EditableSpan')

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)

    }

    const activateViewMode = () => {
        setEditMode(false)
        props.callback(title);
    }

    return (
        <>
            {
                editMode
                    ? <input value={title} onChange={onChangeHandler} onBlur={activateViewMode}/>
                    : <span onDoubleClick={activateEditMode}>{props.title}</span>
            }
        </>
    );
};