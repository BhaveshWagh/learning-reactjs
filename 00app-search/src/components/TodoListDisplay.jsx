/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./TodoListDisplay.css";

const TodoListDisplay = () => {
  
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const numOfTotalPages = Math.ceil(todos.length / todosPerPage);

  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  // console.log(pages);

  // Get current Todos
  const indexOfLastTodo = currentPage * todosPerPage; // 40
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage; // 30
  const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  const getData = async () => {
    const data = await fetch(API_URL);
    const resp = await data.json();
    //console.log(resp.slice(0, 10));
    setTodos(resp);
  };

  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPageHandler = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <select onChange={(e) => setTodosPerPage(e.target.value)}>
        <option value="10">show 10 / page</option>
        <option value="20">show 20 / page</option>
        <option value="30">show 30 / page</option>
        <option value="40">show 40 / page</option>
      </select>
      <h1>Todo List</h1>
      <table>
        <thead className="header">
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {visibleTodos.slice(0, 200).map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={prevPageHandler}>Prev</button>
      <p>
        {pages.map((page) => (
          <span
            className={`${currentPage === page ? "active" : ""}`}
            key={page}
            onClick={() => setCurrentPage(page)}
          >{` ${page} |`}</span>
        ))}
      </p>
      <button onClick={nextPageHandler}>Next</button>
    </>
  );
};

export default TodoListDisplay;
