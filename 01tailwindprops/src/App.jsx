import React from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  // let myObj={
  //   username:"bhavesh",
  //   age:23
  // }
  // let newArr = [1,2,3]
  return (
    <React.Fragment>
      <h1 className="bg-green-400 text-black p-4 rounded-md mb-4">Tailwind test</h1>
      <Cards username="bhaveshbm" btnText="Click Me" />
      <Cards username="Hitesh" />
    </React.Fragment>
  );
}

export default App;
