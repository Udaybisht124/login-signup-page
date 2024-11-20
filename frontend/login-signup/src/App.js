// App.js
import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Signup from "./pages/Singup.js";
import Login from "./pages/Login.js"
import Home from "./pages/Home.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

  );
}

export default App;
