import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/ducks/counter";

const Counter = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);
  // const {count, setCount} = props

  // const count = useSelector(state => state.counter.count)

  const [votes, setVotes] = useState(0);
  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };
  return (
    <div style={{ backgroundColor: "grey", margin: "5px" }}>
      <h2>{name}</h2>
      <h3>{`Votes: ${votes}`}</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
