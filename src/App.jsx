import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import "./App.css";
import Home from "./pages/home/homeScreen";
import Navbar from "./pages/home/Navbar";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
