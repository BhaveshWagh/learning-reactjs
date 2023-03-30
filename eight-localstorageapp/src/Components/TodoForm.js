import React, { useState } from "react";
import { FormGroup, Form, Input, InputGroup, Button } from "reactstrap";
import { v4 } from "uuid";
const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please Fill some Value");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodos(todo);
    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter a todo string"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          >
            <Button color="success">Add Todo</Button>
          </Input>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
