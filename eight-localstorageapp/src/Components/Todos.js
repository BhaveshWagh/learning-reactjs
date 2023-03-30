import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckCircle } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span className="float-end" onClick={() => markComplete(todo.id)}>
            <FaCheckCircle />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
