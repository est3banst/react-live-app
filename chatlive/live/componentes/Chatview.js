import React, { useEffect, useRef, useState } from 'react';
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from 'firebase/firestore';
import { db } from '../firebase';
import Mssg from './Mssg';
import SendMssg from './SendMssg';

const Chatview = () => {
    const [ messages, setMessages ] = useState(false);
    const scroll = useRef();

    useEffect(()=> {
        const q = query (
            collection(db,'messages'),
            orderBy('createdAt','desc'),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot)=> {
            const fetchedMssgs = [];
            QuerySnapshot.forEach((doc)=> {
                fetchedMssgs.push({...doc.data(), id: doc.id});
            });

            const sortedMssgs = fetchedMssgs.sort(
                (a,b) => a.createdAt - b.createdAt
            );
            setMessages(sortedMssgs);
        });
        return () => unsubscribe;
    }, []);
    return (
        <main className='chat-box'>
            <div className='mssg-wrapper'>
                {messages?.map((message) => (
                    <Mssg key={message.id} message={message} />
                ))}
            </div>
            <span ref={scroll}></span>
            <SendMssg scroll={scroll} />
        </main>
    );
};

export default Chatview;