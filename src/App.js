import axios from "axios";
import React, { useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { Notfound } from "./components/Notfound";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
        <p>test</p>
        <p>confilict</p>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userID" element={<Posts />} />
        <Route path="/users/:userID/:postID" element={<Comments />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}
export default App;
