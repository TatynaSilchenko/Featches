import React from 'react'
import style from './Message.module.css'

interface messageDataPropsType {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function Message(props: messageDataPropsType) {
    return (
        <div className={style.messageWrapper}>
            <div className={style.avatarWrapper}>
                <img src={props.avatar} alt="avatar" className={style.avatar}/></div>
            <div className={style.messageContainer}>
                <div>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.message}>{props.message}</div>
                </div>

                <div className={style.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
