import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // useEffect Syntax:
  // useEffect( ()=>{},[])

  // useEffect( () => {
  //   console.log("The component has mounted");
  //   return() => {
  //     console.log("The Component has unmounted")
  //   };
  // },[])

  // ComponentDidMount

  // useEffect(()=>{
  //   console.log("Component has ran")
  // })

  // ComponentDidUpdate
// pass the variable name in empty Array, which u wanted to update 
  // useEffect(() => {
  //   console.log("The use Effect has ran");
  // }, [count]);

// ComponentWillUnmount()
// useEffect(()=>{
//   console.log("The useEffect has ran")
//   return () => {
//     console.log("the return is being ran")
//   }
// })

useEffect( ()=>{ 
    console.log(`The count has updated to ${count}`)
  return () => {
    console.log(`we are in the cleanup - the  count is ${count}`)
  };
},[count])
  return (
    <React.Fragment>
      <h1> Welecome to my Counter </h1>
      <p>Here counter is : : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/*<button onClick={() => setCount(0)}>Reset</button>  
  <button onClick={() => setCount(count - 1)}>Decrement</button>*/}
    </React.Fragment>
  );
};

export default Counter;

// paste These below code in App.js
// const [showCounter,setShowCounter] = useState(false)
// <button onClick={() => setShowCounter(!showCounter)}>{showCounter ? "Hide Counter": "Show Counter"}</button>
  // {showCounter && <Counter/>}