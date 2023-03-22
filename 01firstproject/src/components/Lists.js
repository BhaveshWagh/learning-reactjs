import React from "react";

function Lists() {
  const array = [1, 2, 3, 4, 5];
  //   const newArray = array.map((num) => (<li>{num}</li>))

  return (
    <React.Fragment>
      <h4>Learning Lists In React</h4>
      <ul>
        {array.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Lists;
