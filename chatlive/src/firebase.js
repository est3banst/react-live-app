import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAiyldjQ_-I6A34hVXOIKQOF8s1JyufBwU",
    authDomain: "live-chat-12bc5.firebaseapp.com",
    projectId: "live-chat-12bc5",
    storageBucket: "live-chat-12bc5.appspot.com",
    messagingSenderId: "472520296244",
    appId: "1:472520296244:web:ec76f72de1b2cdf0718761",
    measurementId: "G-YF1SVJSS43"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);