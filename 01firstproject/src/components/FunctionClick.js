import React from "react";
// import { useState } from "react";

function FunctionClick() {
    
    const changeEvent = (e) => {
        e.preventDefault()
        console.log("Btn clicked!...",)
    }

  return (
    <React.Fragment>
      <a href="https://react.dev/" onClick={changeEvent}>Click Me !</a>
    </React.Fragment>
  );
}

export default FunctionClick;
