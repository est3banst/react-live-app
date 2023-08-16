import React, { useState } from "react";
import GoogleSignin from "../login/btn_google_signin_dark_pressed_web.png";

const NavBar = () => {
  const [user, setUsr] = useState(false);

  const googleSignIn = () => {
    setUsr(true);
  };

  const signOut = () => {
    setUsr(false);
  };

  return (
    <nav className="nav-bar">
      <h1>Live Chat made with React</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;