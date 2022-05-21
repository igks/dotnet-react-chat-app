const Message = ({ currentUser, user, message }) => (
  <>
    {currentUser === user ? (
      <div
        style={{
          background: "##5afad5",
          borderRadius: "5px",
          padding: "1px 10px",
          marginBottom: "10px",
          width: "80%",
          float: "left",
        }}
      >
        <p>{message}</p>
      </div>
    ) : (
      <div
        style={{
          background: "##cededa",
          borderRadius: "5px",
          padding: "1px 10px",
          marginBottom: "10px",
          width: "80%",
          float: "right",
        }}
      >
        <p>{message}</p>
      </div>
    )}
  </>
);

export default Message;
