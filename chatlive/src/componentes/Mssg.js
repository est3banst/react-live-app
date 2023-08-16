import React from 'react';

const Mssg = () => {
    return (
        <div className={`chat-blob`}>
            <img className='chat-blob__left' src='' alt='user-avatar'/>
            <div className='chat-blob__right'>
                <p className='user-name'>Bianca Loureiro</p>
                <p className='user-messg'>Building a real-time chat app</p>
            </div>
        </div>
    );
};

export default Mssg;