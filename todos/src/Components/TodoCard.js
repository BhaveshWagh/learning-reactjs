// import {createBrowserHistory} from "react-router-dom"
import React from "react";

const TodoCard = (props) => {
  const { todo } = props;
  const { id, completed, title } = todo;
//   let history = createBrowserHistory();
  return (
    <div style={{
        backgroundColor:"grey", 
        margin:"10px",
        padding:"15px",
        width:"150px"
    }}
    // onClick={() => history.push(`/todo/${id}`)} 
    >
      <h4>{title}</h4>
      <h6>{`Completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
