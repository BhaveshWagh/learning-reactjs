//jokes api : https://sv443.net/jokeapi/v2/joke/Programming?type=single
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [joke, setJoke] = useState([]);

  const fetchJokesApi = async () => {
    const response = await fetch(
      "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
    );
    const data = await response.json();
    console.log("Data :", data);
    setJoke(data);
  };

  return (
    <>
     
      <div className="card">
        <h1>Ramdom Joke Generator</h1>
        <div>{joke.joke}</div>
        <button onClick={fetchJokesApi}> Generator Joke</button>
      </div>
    </>
  );
}

export default App;
