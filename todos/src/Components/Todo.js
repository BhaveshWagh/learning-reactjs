import React from "react";
import { useParams } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();
  return <h1>{`This is the Todo components and TOdo is : ${id}`}</h1>;
};

export default Todo;
