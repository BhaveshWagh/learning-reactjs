// Asked in ARIS INVESTING INTERN ROLE 

import { useEffect, useState } from "react";
import "./App.css";

function FetchTodos() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    console.log(data.todos);
    setData(data.todos);
  };
  return (
    <>
      <h1>Interview Questions</h1>
      {data &&
        data.slice(0, 5).map((listItem) => {
          {
            /* Here she asked me diff B/W Slice and Splice */
          }
          return (
            <ul key={listItem.id}>
              <li>{listItem.todo}</li>
            </ul>
          );
        })}
    </>
  );
}

export default FetchTodos;
