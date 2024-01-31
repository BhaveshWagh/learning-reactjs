import { useEffect, useState } from "react";
import "./TodoListDisplay.css";

const TodoListDisplay = () => {
  const [isData, setIsData] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  const getData = async () => {
    const data = await fetch(API_URL);
    const resp = await data.json();
    console.log(resp.slice(0, 10));
    setIsData(resp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {isData.slice(0, 200).map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TodoListDisplay;
