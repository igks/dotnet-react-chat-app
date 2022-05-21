const Message = ({ currentUser, user, message }) => (
  <>
    {currentUser === user ? (
      <div
        style={{
          backgroundColor: "#5afad5",
          borderRadius: "5px",
          padding: "1px 10px",
          marginBottom: "10px",
          width: "80%",
          float: "left",
        }}
      >
        <small>You</small>
        <p>{message}</p>
      </div>
    ) : (
      <div
        style={{
          backgroundColor: "#cededa",
          borderRadius: "5px",
          padding: "1px 10px",
          marginBottom: "10px",
          width: "80%",
          float: "right",
        }}
      >
        <small>{user}</small>
        <p>{message}</p>
      </div>
    )}
  </>
);

export default Message;
