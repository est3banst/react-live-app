import React from 'react';
import GoogleSignin from '../login/btn_google_signin_dark_pressed_web.png';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const Navbar = () => {
    const [ user ] = useAuthState(auth);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup( auth, provider );
    };

    const closeSes = () => {
        auth.signOut();
    };

    return (
        <nav className='my-chat'>
            <h1> Dopest Live Chat</h1>
            { user ? (
                <button onClick={closeSes} className='sign-out'>
                    Log off
                </button>
            ) : (
                <button className='sign-in'>
                    <img
                    onClick={googleSignIn}
                    src={GoogleSignin}
                    alt='sign in with google'
                    type='button'
                    />

                </button>
            )}
        </nav>
    );
};

export default Navbar;