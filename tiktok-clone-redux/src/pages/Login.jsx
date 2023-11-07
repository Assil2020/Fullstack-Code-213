import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
      console.log("Authentication successful");
    } else {
      console.log("Authentication failed");
    }
  };

  return (
    <div id="login-page" className="login">
      <h2>Connect to TikTok</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login__input"
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login__input"
        placeholder="Password"
      />
      <button className="login__button">
        <Link to="/video">Connexion</Link>
      </button>
      <span>
        By continuing, you accept TikTok's Terms of Use and confirm that you
        have read TikTok's Privacy Policy.
      </span>
      <div className="register-div">
        <p className="register-div__text">
          Don't&nbsp;you&nbsp;have&nbsp;an&nbsp;account?
        </p>
        <button className="login__register-button">
          <Link to="/register">REGISTRATION</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
