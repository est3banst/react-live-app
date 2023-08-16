import React from 'react';
import Mssg from './Mssg';
import SendMssg from './SendMssg'

const Chatview = () => {
    return (
        <main className="chat-bx">
            <div className="mssg-wrap">
            <Mssg />
            </div>
            <SendMssg />
        </main>
    );
};

export default Chatview;