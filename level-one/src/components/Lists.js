import React from "react";
import Testing from "./Testing";
function Lists() {
  // const array = [1, 2, 3, 4,3 , 5,6,7,8 ];
  const users = [
    {
      id: 1,
      name: "Bhavesh",
      last: "Wagh",
    },
    {
      id: 2,
      name: "Hitesh",
      last: "Wagh",
    },
  ];
  //   const newArray = array.map((num) => (<li>{num}</li>))

  return (
    <React.Fragment>
      <h4>Learning Lists In React</h4>
      <ul>
        {users.map((user) => (
          // <li key={num.id}>
          //   {num.id} {num.name} {num.last}
          // </li>
<Testing key={user.id} value ={user.id}> </Testing>

        ))}
      </ul>
      ;
    </React.Fragment>
  );
}

export default Lists;
// <Testing key={user.id}>{user.id} </Testing>;
// <ul>
//   {users.map((num) => (
//     <li key={num.id}>
//       {num.id} {num.name} {num.last}
//     </li>
//   ))}
// </ul>;
