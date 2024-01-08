import React from 'react';
import messagePageStyle from './messagePage.module.css'

export const MessagePage = () => {

    const messageState = {
        dialog: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Alex'},
        ],
        message: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'by'},
        ],
        newMessageText: ''
    }

    const dialogsList = messageState.dialog.map(d =>
        <div>
            <span><img/></span>
            <span>{d.name}</span>
        </div>
    )

    const messageList = messageState.message.map(m =>
        <div>
            <span><img/></span>
            <span>{m.message}</span>
        </div>
    )


    return (
        <div className={messagePageStyle.container}>
            <div className={messagePageStyle.block}>{dialogsList}</div>
            <div className={messagePageStyle.block}>
                {messageList}
                <div>
                    <input/>
                    <div>
                        <button>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};