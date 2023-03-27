import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';--
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />} >
      <Route path="courses" element={<Courses />} />
        <Route path="bundles" element={<Bundles />} /> 
      </Route>
    </Routes>
  </Router>
);
function Home() {
  return (
    <React.Fragment>
      <h1>This Main Home</h1>
    </React.Fragment>
  );
}

function Learn() {
  return (
    <React.Fragment>
      <h1>Learn</h1>
      <h4> All Courses here</h4>
      <Link className="btn btn-success m-2" to="/learn/courses">
        Courses
      </Link>
      <Link className="btn btn-primary" to="/learn/bundles">
        Bundle
      </Link>
    </React.Fragment>
  );
}

function Courses() {
  return (
    <React.Fragment>
      <h1>Course list</h1>
      <h4>Course card</h4>
    </React.Fragment>
  );
}

function Bundles() {
  return (
    <React.Fragment>
      <h1>Bundle list</h1>
      <h4>Bundle card</h4>
    </React.Fragment>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
