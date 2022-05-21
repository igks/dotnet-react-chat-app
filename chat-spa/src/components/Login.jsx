import React, { useState } from "react";

const Login = ({ updateUser }) => {
  const [user, setUser] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const isUserValid = user && user !== "";

    if (isUserValid) {
      updateUser(user);
    } else {
      alert("Please provide your Name");
    }
  };

  const onUserChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            id="user"
            name="user"
            value={user}
            placeholder="Provide your name or ID"
            onChange={onUserChange}
            style={{
              width: "100%",
              height: "30px",
              marginBottom: "10px",
            }}
          />
          <input
            type="submit"
            value="Start Chatting"
            style={{ width: "100%", height: "30px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
