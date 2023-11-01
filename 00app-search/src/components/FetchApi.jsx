import { useState } from "react";

// https://randomuser.me/api/
export const FetchApi = () => {
  const [data, setData] = useState();
  const handleClick = async () => {
    const response = await fetch("https://randomuser.me/api/");

    const data = await response.json();

    setData(data.results);
  };

  return (
    <>
      <h1>Fetch Data</h1>

      <button onClick={handleClick}>Click me</button>
      <div>
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
