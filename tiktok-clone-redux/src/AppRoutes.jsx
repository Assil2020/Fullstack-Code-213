import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};
