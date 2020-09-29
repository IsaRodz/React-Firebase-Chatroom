import React from "react";
import "./app.scss";

import firebase from "./firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import Chat from "./components/Chat";
import Loading from "./components/Loading";
import Home from "./components/Home";

const auth = firebase.auth();

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;
  return (
    <div className="app">
      <section>{user ? <Chat /> : <Home />}</section>
    </div>
  );
}

export default App;
