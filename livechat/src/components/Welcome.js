import React from 'react';
import GoogleSignin from '../google-sign-in-img/btn_google_signin_dark_pressed_web.png'


const Welcome  = () => {
    const googleSignIn = () =>{

    };
    return ( 
        <main className="welcome">
            <h2>Welcome to my Live Chaty chat</h2>
            <img src="../public/img-chaty.jpg" alt="chatyChat" width={40} height={40}/>
            <p>Sign in with Google to chat with anybody</p>
            <button className="sign-in">
                <img onClick={googleSignIn}
                src={GoogleSignin}
                alt="sign in with google"
                type="button"
                />
            </button>
        </main>
    );
};

export default Welcome;