import React, { Fragment } from "react";
import Context from "./Context";

// Do the following all changes in App.js
// import Provider from "./ContextProvider/Provider";
// import Agents from "./ContextProvider/Agents";
//Below Code goes into App component in return 

// <h1>Context API</h1>
//       <Provider>
//         <Agents />
//       </Provider>
// in App.js


const Agents = () => {
    return <AgentOne />;
  };
  
  const AgentOne = () => {
    return <AgentTwo />;
  };
  const AgentTwo = () => {
    return <AgentBond />;
  };
  const AgentBond = () => {
    return (
      <Context.Consumer>
      
      {
        (context) => (
          <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.mname}</p>
          <h2>Mission Status : {context.data.accept }</h2>
          <button onClick={context.isMissionAccepted}>Click to Accept</button>
          </Fragment>
        )
      }
      
      </Context.Consumer>
    )
  }
  

export default Agents