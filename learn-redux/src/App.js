import React, { useEffect } from "react";
// import Counter from "./Components/Counter";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "./redux/ducks/user";
// import axios from "axios";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "./reduxToolkit/CounterSlice";

function App() {
  const {count} = useSelector( state => state.counter );
  const dispatch = useDispatch()
  // console.log(count)  
  return (
    <div className="App">
      <h1>The Count is {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;

// {/*<div className="App">{user && <h1>Hello, {user.firstName}</h1>}</div>*/}

// <Counter name="Bhavesh Wagh"/>
//       <Counter name="Hitesh Wagh"/>
//       <Counter name="Dipak Wagh"/>
// instead of copy paste Counter Component use map functions

// const [count,setCount] = useState(0)
// <h2>Count is : {count}</h2>
// <Counter count={count} setCount={setCount}/>

// <h1>Redux Made Easy</h1>
// <h2>Total Votes : {count}</h2>
// {Voters.map((voter) => {
//   return <Counter name={voter} />;
// })}
