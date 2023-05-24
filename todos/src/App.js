import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Components/Todo";
import Todos from "./Components/Todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
