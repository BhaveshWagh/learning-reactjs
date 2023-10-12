// import React from 'react'

// import { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/bhaveshwagh")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div
      className="text-center m-4
     bg-gray-600 text-white p-4 text-3xl"
    >
      {/* Github followers : 100 */}
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="profile picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/bhaveshwagh')
    return response.json()
}