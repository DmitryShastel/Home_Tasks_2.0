import React from 'react'
import s from './Message.module.css'

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageType) {
    return (
        <div className={s.wrapper}>
            <img src='https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg'/>
            <div className={s.container}>
                <div className={s.container2}>
                    <h2>{props.name}</h2>
                    <span >{props.message}</span>
                    <span className={s.time}>{props.time}</span>
                </div>

            </div>

        </div>
    )
}

export default Message
