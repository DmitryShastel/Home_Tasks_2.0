import React, {ChangeEvent, useState} from 'react';

type EditableSpan2PropsType = {
    title: string
    callback: (newTitle: string) => void
}

export const EditableSpan2 = (props: EditableSpan2PropsType) => {

    const [openInput, setOpenInput] = useState<boolean>(false)
    const [title, setTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setOpenInput(true)
        setTitle(props.title)
    }

    const activateViewMode = () => {
        setOpenInput(false)
        props.callback(title)
    }


    return (
        <>
            {
                openInput
                    ? <input value={title} onChange={onChangeHandler} onBlur={activateViewMode}/>
                    : <span onDoubleClick={activateEditMode}>{props.title}</span>
            }
        </>
    );
};