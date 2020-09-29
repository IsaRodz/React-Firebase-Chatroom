import React from "react";
import firebase from "../firebase";

const auth = firebase.auth();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button className="button primary large" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

export default SignIn;
