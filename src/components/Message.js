import React from 'react';
import firebase from '../firebase';

const auth = firebase.auth();

function Message(props) {
    const { text, uid, photoURL, displayName } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={messageClass}>
            <img src={photoURL} alt={displayName} className="photo" />
            <p className="text">{text}</p>
        </div>
    );
}

export default Message;
