import React from "react";
import SingupForm from "./Components/SingupForm";
import "./App.css";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
        <h1>Form validate</h1>
        <h6>***If you are interested then try to fill this form.</h6>
          <SingupForm />
        </div>
      </div>
    </div>
  );
}

export default App;
