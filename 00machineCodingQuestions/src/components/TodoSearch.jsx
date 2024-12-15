import { useEffect, useState } from "react";
import "./TodoListDisplay.css";

const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoSearch = () => {
  const [todos, setTodos] = useState([]);
  const [listOfFilterTodos,setListOfFilterTodos] = useState([])
  const [searchquery, setSearchQuery] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const data = await fetch(TODOS_API_URL);
    const resp = await data.json();
    console.log(resp);
    setTodos(resp);
    setListOfFilterTodos(resp)
  };

  const handleSearchQuery = () => {
    const filterTodos = todos.filter((todo) =>
      todo.title.includes(searchquery.toLowerCase())
    );
    setListOfFilterTodos(filterTodos);
  };

  return (
    <>
      <div>
      <input
        type="text"
        placeholder="Search Todos"
        value={searchquery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="btnSearch" onClick={handleSearchQuery}>Search</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
          </tr>
        </thead>
        <tbody>
          {listOfFilterTodos?.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoSearch;
