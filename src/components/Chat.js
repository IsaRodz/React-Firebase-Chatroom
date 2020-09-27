import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import firebase from '../firebase';

import Message from './Message';

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {
    const messagesRef = firestore.collection('/messages');

    const query = messagesRef.orderBy('createdAt');

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [value, setValue] = useState('');

    const sendMessage = async e => {
        e.preventDefault();

        const { uid, photoURL, displayName } = auth.currentUser;

        await messagesRef.add({
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            displayName,
            photoURL,
            uid,
        });

        setValue('');
    };

    return (
        <div className="chatroom">
            <div className="messages">
                {messages &&
                    messages.map(msg => <Message key={msg.id} message={msg} />)}
            </div>
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

export default Chat;
