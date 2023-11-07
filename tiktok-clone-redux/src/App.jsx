import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

const videos = [
  {
    id: 1,
    src: "https://www.tiktok.com/embed/v2/7202795825456581894",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2,
    src: "https://www.tiktok.com/embed/v2/7297421738818784517",
  },
  {
    id: 3,
    src: "https://www.tiktok.com/embed/v2/7297050284226792710",
  },
  {
    id: 4,
    src: "https://www.tiktok.com/embed/v2/7295225637160193285",
  },
  {
    id: 5,
    src: "https://www.tiktok.com/embed/v2/7294823267389426949",
  },
  {
    id: 6,
    src: "https://www.tiktok.com/embed/v2/7287030911122689286",
  },
  {
    id: 7,
    src: "https://www.tiktok.com/embed/v2/7286658831160020230",
  },
  {
    id: 8,
    src: "https://www.tiktok.com/embed/v2/7285057709831982341",
  },
  {
    id: 9,
    src: "https://www.tiktok.com/embed/v2/7284835304933035269",
  },
  {
    id: 10,
    src: "https://www.tiktok.com/embed/v2/7284464596335791365",
  },
  {
    id: 11,
    src: "https://www.tiktok.com/embed/v2/7284093107514166534",
  },
  {
    id: 12,
    src: "https://www.tiktok.com/embed/v2/7282487880126319877",
  },
  {
    id: 13,
    src: "https://www.tiktok.com/embed/v2/7281463748718611717",
  },
  {
    id: 14,
    src: "https://www.tiktok.com/embed/v2/7279980089826118917",
  },
  {
    id: 15,
    src: "https://www.tiktok.com/embed/v2/7274042837044432134",
  },
];

function App() {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/video"
            element={
              <div className="app__videos">
                <Video videos={videos} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <div className="header">
        <button className="Logout__button" onClick={handleLogout}>
          Logout
        </button>
        <div className="logo-container">
          <a
            data-e2e="tiktok-logo-text"
            className="tiktok-logo-text"
            aria-label="Go to TikTok For You feed"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 118 42"
              width="118"
              height="42"
              alt="TikTok"
            >
              <path
                fill="#25F4EE"
                d="M9.875 16.842v-1.119A8.836 8.836 0 008.7 15.64c-4.797-.006-8.7 3.9-8.7 8.707a8.706 8.706 0 003.718 7.135A8.675 8.675 0 011.38 25.55c0-4.737 3.794-8.598 8.495-8.707z"
              ></path>
              <path
                fill="#25F4EE"
                d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a6.78 6.78 0 01-.11-1.202h-4.726l-.006 18.969a3.978 3.978 0 01-3.967 3.829 3.93 3.93 0 01-1.846-.46 3.949 3.949 0 003.22 1.662zM23.992 13.166v-1.055a6.506 6.506 0 01-3.583-1.068 6.571 6.571 0 003.583 2.123z"
              ></path>
            </svg>
            <strong>TikTok</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
