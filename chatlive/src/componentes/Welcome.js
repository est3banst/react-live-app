import React from 'react';
import GoogleSignIn from '../login/btn_google_signin_dark_pressed_web.png'

const Welcome = () => {
    const googleSignIn = () => {
    };
    return (
        <main className='Welcome'>
            <h2>Welcome to my Live Chat</h2>
            <img src='' alt=''/>
            <p>Sign in with Google to chat with some cool people</p>
            <button className='sign-in'>
            <img
                onClick={googleSignIn}
                src={GoogleSignIn}
                alt='sign in with google'
                type='button'
                />
            </button>
        </main>
    );
};

export default Welcome;