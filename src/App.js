import React from 'react';
import './app.scss';

import firebase from './firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Chat from './components/Chat';

const auth = firebase.auth();

function App() {
    const [user] = useAuthState(auth);
    return (
        <div className="app">
            <header className="app-header">
                Chatroom
                {user && <SignOut />}
            </header>
            <section>{user ? <Chat /> : <SignIn />}</section>
        </div>
    );
}

export default App;
