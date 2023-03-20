import React from "react";
import { useState } from "react";

function Channel() {
  const [msg, setMsg] = useState("Namaste React UTube Channel");

  function handleClick() {
    setMsg("Thanks for Subscribe");
    // console.log('clicked')
  }

  return(
    <div>
    <h1>{msg}</h1>
    <button onClick={handleClick}>Subscibe</button>
    </div>
  )
}

// class Channel extends React.Component{
//     constructor(){
//         super();
//         this.state ={
//             msg : 'Namaste React UTube Channel'
//         }
//     }//constructor
//      subscribe(){
//         this.setState({
//             msg:'Thanks For Subscribe'
//         })
//      }

//     render(){
//         return(
//             <div>
//             <h1>{this.state.msg}</h1>
//             <button onClick={ ()=> {this.subscribe()}}>Subscibe</button>
//             </div>
//         )
//     }//rendor
// } //class Channel extends React.Component{

export default Channel;
