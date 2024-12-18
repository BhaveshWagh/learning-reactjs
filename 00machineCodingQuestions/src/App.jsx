import { useEffect, useState } from "react";
import "./App.css";



function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    getData();
  }, [])
  const getData = async () => {
    const response = await fetch('https://dummyjson.com/todos')
    const data = await response.json()
    console.log(data.todos)
    setData(data.todos)
  }
  return (
    <>
      <h1>Interview Questions</h1>
     {data && data.splice(0,5).map((listItem)=>{
      return(
        <ul key={listItem.id}>
          <li>{listItem.todo}</li>
        </ul>
      )
     })}
    </>
  );
}

export default App;
