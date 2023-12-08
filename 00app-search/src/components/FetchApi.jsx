import { useState } from "react";

// https://randomuser.me/api/
export const FetchApi = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const handleClick = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");

      const data = await response.json();

      setData(data.results);
    } catch (error) {
      setError("Error fetching user: " + error)
    }
  };

  return (
    <>
      <h1>Fetch Data</h1>

      <button onClick={handleClick}>Click me</button>
      <div>
      {error && <div>Error: {error}</div>}
        {data &&
          data.map((getData) => (
            <div key={getData.name.first}>
              <div>firstName : {getData.name.first}</div>
              <div>lastName : {getData.name.last}</div>
              <div>Gender : {getData.gender}</div>
              <div>City : {getData.location.city}</div>
              <div>Street : {getData.location.street.name}</div>
            </div>
          ))}
      </div>
    </>
  );
};
