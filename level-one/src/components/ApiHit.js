import React from "react";
import { useState } from "react";

function ApiHit() {
  const [first, setFirst] = useState();
  const openHandle = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    // console.log(data.results)
    setFirst(data.results);
  };

  return (
    <div>
      <button onClick={openHandle}>Open</button>
      <div>
        {first &&
          first.map((first) => (
            <div key={first.name.first}>
              <div>{first.name.first}</div>
              <div>{first.name.last}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ApiHit;
