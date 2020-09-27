import React from 'react';
import firebase from '../firebase';

const auth = firebase.auth();

function SignOut() {
    const signOut = () => {
        auth.signOut();
    };

    return auth.currentUser && <button onClick={signOut}>Sign out</button>;
}

export default SignOut;
