import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Auth = ({ onLoginSuccess, isRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async () => {
    const url = isRegister
      ? "http://localhost:3000/auth/register"
      : "http://localhost:3000/auth/login";

    const method = isRegister ? "POST" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Token:", data.token);

        if (onLoginSuccess) {
          onLoginSuccess(data.token);
          navigate("/recipes");
        }
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <label className="auth-label">
        Username:
        <input
          type="text"
          className="auth-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label className="auth-label">
        Password:
        <input
          type="password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button className="auth-button" onClick={handleAuth}>
        {isRegister ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default Auth;
