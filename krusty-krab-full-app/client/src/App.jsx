import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import RecipeList from "./components/RecipeList";
import Auth from "./components/Auth";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = (token) => {
    setIsLoggedIn(true);
    setToken(token);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <Router>
      <div>
        <h1 className="title-container">Krusty Krab App</h1>
        {isLoggedIn ? (
          <>
            <button className="logoutbtn" onClick={handleLogout}>
              Logout
            </button>
            <Routes>
              <Route path="/recipes" element={<RecipeList token={token} />} />
              <Route path="/" element={<Navigate to="/recipes" />} />
            </Routes>
          </>
        ) : (
          <>
            {showRegister ? (
              <>
                <Auth onLoginSuccess={handleLoginSuccess} isRegister={true} />
                <p className="auth-message">
                  Already have an account?{" "}
                  <Link to="#" onClick={toggleForm}>
                    Login
                  </Link>
                </p>
              </>
            ) : (
              <>
                <Auth onLoginSuccess={handleLoginSuccess} isRegister={false} />
                <p className="auth-message">
                  Don't have an account?{" "}
                  <Link to="#" onClick={toggleForm}>
                    Register
                  </Link>
                </p>
              </>
            )}
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
