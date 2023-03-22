import React from "react";
import "./App.css";
// import ApiHit from "./components/ApiHit";,
// import {Header} from "./components/Header";
// import Channel from "./components/Channel";
// import FunctionClick from "./components/FunctionClick";
// import Lists from "./components/Lists";
// import axios from "react-axios"
// import { useState } from "react";
// import Testing from "./components/Testing";
// import Stylesheet from "./components/Stylesheet";
// import Form from "./components/Form";
import Routing from "./Routing";

function App() {
  return (
    <div>
      <h1>Namaste ReactJs</h1>
      <Routing />
    </div>
  );
}
export default App;

// <Stylesheet isvalue = {true }/>
// class Based
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Namaste React</h1>
//         <Channel/>

//     </div>
//     )
//   }
// }

// const age = function(a){
//   if(a >= 18){
//     return <span>Your Eligible for Voting</span>
//   }
//   else{
//     return <span>Your Not Eligible for Voting</span>
//   }
// {newElement}
//       <button onClick={test}>Click Me</button>
//       <br />
//       {age(12)}
// }
// <Header name="Hitesh" last="Wagh"/>
//       <Header name="bhavesh" last="Wagh">
//       <p>This is child</p>
//       // </Header>

// const name = <span>Hello React</span>; //jsx
// const newElement = React.createElement(
//   "h2",
//   { className: "newElement" },
//   "hello h2 tag"
// ); //  Without JSX

// // const test = function(){
// //   alert("Namaste Bhavesh")
// // }
// // Using Arrow funct ion
// const test = () => alert("Hello Anuj");

// // using Ternary Operator if Else :

// const age = (a) =>
//   a >= 18 ? (
//     <span>Your Eligible for Voting</span>
//   ) : (
//     <span>Your NOT Eligible for Voting</span>
//   );
