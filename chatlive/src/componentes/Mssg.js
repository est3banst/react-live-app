import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Message = ({ message }) => {
    const [ user ] = useAuthState(auth);
    return (
        <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
            <img
            className='chat-box__left'
            src={message.avatar}
            alt='user avatar'
            />
            <div className='chat-box__right'>
                <p className='user-name'>{message.name}</p>
                <p className='user-message'>{message.text}</p>
            </div>

        </div>
    );
};

export default Message;