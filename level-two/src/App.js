import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
