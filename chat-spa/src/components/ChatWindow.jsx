import Message from "./Message";
import ChatInput from "./ChatInput";

const ChatWindow = ({ chats, currentUser, sendMessage }) => {
  const chatsList = chats.map((chat) => (
    <Message
      key={Date.now() * Math.random()}
      user={chat.user}
      message={chat.message}
      currentUser={currentUser}
    />
  ));

  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      >
        <div
          style={{
            height: "80vh",
            maxHeight: "80vh",
            overflow: "auto",
            marginBottom: "20px",
          }}
        >
          <h4>{currentUser}</h4>
          <hr />
          {chatsList}
        </div>
        <div style={{}}>
          <ChatInput sendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
