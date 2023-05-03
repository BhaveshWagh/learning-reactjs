import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h1> Welecome to my Counter </h1>
      <p>Here counter is : : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </React.Fragment>
  );
};

export default Counter;
