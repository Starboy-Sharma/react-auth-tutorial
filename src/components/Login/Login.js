import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
const BASE_URL = "http://localhost:8080/";

async function loginUser(credentials) {
  return fetch(`${BASE_URL}login`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = function ({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    // Stop reload page after submit
    e.preventDefault();
    const token = await loginUser({ username, password });
    console.log(token);
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h2> Please Login </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p> Username </p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p> Password </p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
