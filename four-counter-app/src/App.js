import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter App Using State</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => count >= 10 ?  "" : setCount(count + 1)} className="increase">Increse Counter</button>
      <button onClick={() => setCount(0)} className="reset">Reset Counter</button>
      <button onClick={() => count <= 0 ? "" : setCount(count - 1)} className="decrease">Decrease Counter</button>
    </div>
  );
}

export default App;
