import React from "react";
import SignIn from "./SignIn";

function Home() {
  return (
    <div className="container">
      <h1 className="title h1">Chatroom</h1>
      <p>
        Chatroom es una básicamente aplicación de chat grupal. Aún está en
        desarrollo así que no soporta muchas características como Whatsapp,
        Messenger, Telegram y otras apps.
      </p>
      <p>
        La idea de crear esta aplicación surgió de la intención de aprender.
      </p>
      <p>
        Esta app fue construida utilizando ReactJS y Firebase. Puedes obtener el
        repositorio en{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/IsaRodz/React-Firebase-Chatroom"
        >
          {" "}
          Github
        </a>
        .
      </p>
      <SignIn />
    </div>
  );
}

export default Home;
