import React from 'react';

const SendMssg = () => {
    return (
        <form className='send-mssge'>
            <label htmlFor='messageInput' aria-hidden>
            Enter your message
            </label>
            <input 
            id='messageInput'
            name='messageInput'
            type='text'
            className='form-input__input'
            placeholder='type your message...'
            />
            <button type='submit'>Send</button>
        </form>
    );
};

export default SendMssg;