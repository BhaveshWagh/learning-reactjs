import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PageNotFount from "./Pages/PageNotFount";
import Geolocate from "./Pages/Geolocate";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/logged/locate" element={<Geolocate />} />
        <Route path="*" element={<PageNotFount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
