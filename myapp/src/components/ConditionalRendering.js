import React, { useState } from "react";

const ConditionalRendering = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <React.Fragment>
      {/*  const employees = ["Bhavesh","Hitesh "] */}

      <h1>Welcome to the app!</h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log out" : "Log in"}
      </button>

      {loggedIn ? (
        <h2>Hello Anthony! </h2>
      ) : (
        <div>
          <h2> Please log in to continue!</h2>
          {/* <button>Login</button> */}
        </div>

        /* {employees && employees.length > 0 &&(<div>
                  <h1>Employee List: </h1>
                    {employees.map((employee)=> (
                      <h4>{employee}</h4>
                    ))}
                  </div>)} */
      )}
    </React.Fragment>
  );
};

export default ConditionalRendering;
