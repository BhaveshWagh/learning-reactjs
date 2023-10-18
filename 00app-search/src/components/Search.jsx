/* eslint-disable no-unused-vars */
import { useState } from "react";

function Search() {
    const fruitsList = ["apple", "kiwi", "mango", "grapes"]
    
    // const [list, setList] = useState(fruitsList);
    const [searchText, setSearchText] = useState('');

  // let searchResult = list.filter((item) =>
    // item.toLowerCase().includes(searchText.toLowerCase())
  // );
  
  return (
    <div>
      <h1>Search App</h1>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search here"
      />
      <ul>
        { fruitsList.filter((item)=>{
          return searchText.toLowerCase() === "" ? item : item.toLowerCase().includes(searchText.toLowerCase())
        }) 
        .map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Search;
