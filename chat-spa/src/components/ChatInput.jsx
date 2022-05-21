import React, { useState } from "react";

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const isMessageProvided = message && message !== "";

    if (isMessageProvided) {
      sendMessage(message);
    } else {
      alert("Please provide user and a message");
    }
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            placeholder="Type your message..."
            onChange={onMessageChange}
            style={{ width: "100%", marginRight: "10px", height: "30px" }}
          />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
