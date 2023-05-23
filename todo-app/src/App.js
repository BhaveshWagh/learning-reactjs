import React, {  useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  // useEffect(() => {});

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if(inputList ===""){
      return alert("Please enter a todo")
    }
    else{
      setItems((oldItems) => {
        return [...oldItems,inputList]
      })
      setInputList('')
    }
    
  };

    const deleteItems = (id) => {
      // console.log('deleted')
      setItems((oldItems) =>{
        return oldItems.filter( (arrEle,index) =>{
          return index !== id;  
        } )
      } )

    }
  return (
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <br />

          <h1>Todo List </h1>
          <br />

          <input  text="text" placeholder="Add a Items" onChange={itemEvent}
          value={inputList} />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/*<li>{inputList}</li>*/} 
            {items.map((itemvalue, index) => { 
              return  <TodoList key={index} id={index} text = {itemvalue} onSelect={deleteItems}/>;
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
