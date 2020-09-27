import React, { useState } from 'react';
import './app.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: 'AIzaSyDHLHpUVR6850QajwNW4NjKJc9K4_QZQIg',
    authDomain: 'chat-app-792e9.firebaseapp.com',
    databaseURL: 'https://chat-app-792e9.firebaseio.com',
    projectId: 'chat-app-792e9',
    storageBucket: 'chat-app-792e9.appspot.com',
    messagingSenderId: '660040631410',
    appId: '1:660040631410:web:8ec973a2ab0d11a8ea6eeb',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

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

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
    const signOut = () => {
        auth.signOut();
    };

    return auth.currentUser && <button onClick={signOut}>Sign out</button>;
}

function Message(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={messageClass}>
            <img src={photoURL} alt="" className="photo" />
            <p className="text">{text}</p>
        </div>
    );
}

function Chat() {
    const messagesRef = firestore.collection('/messages');

    const query = messagesRef.orderBy('createdAt');

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [value, setValue] = useState('');

    const sendMessage = async e => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL,
            uid,
        });

        setValue('');
    };

    return (
        <div className="chatroom">
            {messages &&
                messages.map(msg => <Message key={msg.id} message={msg} />)}
            <form onSubmit={sendMessage}>
                <input
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default App;
