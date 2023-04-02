import React from "react";

const TodoList = (props) => {
  return (
    <React.Fragment>
    <div className="todo_style"> 
    <i className="fa fa-times" aria-hidden="true"/>
    <li>{props.text}</li>
    </div>
    </React.Fragment> 
  )
};

export default TodoList;
