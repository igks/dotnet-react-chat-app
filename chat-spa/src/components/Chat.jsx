import React, { useState, useEffect, useRef } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

import ChatWindow from "./ChatWindow";
import Login from "./Login";

const Chat = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [connection, setConnection] = useState(null);
  const [chats, setChat] = useState([]);
  const latestChat = useRef(null);

  latestChat.current = chats;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("http://localhost:5286/hub/chat")
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then((result) => {
          console.log("Connected!");

          connection.on("ReceiveMessage", (message) => {
            const updatedChat = [...latestChat.current];
            updatedChat.push(message);

            setChat(updatedChat);
          });
        })
        .catch((e) => console.log("Connection failed: ", e));
    }
  }, [connection]);

  const sendMessage = async (message) => {
    const chatMessage = {
      user: currentUser,
      message: message,
    };
    if (connection._connectionStarted) {
      try {
        console.log("message sent");
        await connection.send("SendMessage", chatMessage);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("No connection to server yet.");
    }
  };

  const updateUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      {currentUser ? (
        <ChatWindow
          chats={chats}
          currentUser={currentUser}
          sendMessage={sendMessage}
        />
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Login updateUser={updateUser} />
        </div>
      )}
    </div>
  );
};

export default Chat;
