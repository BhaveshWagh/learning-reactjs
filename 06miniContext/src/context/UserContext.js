import React from "react";

const UserContext = React.createContext(); // context is created

//  throught to the output using export
export default UserContext;


// step 2 : create usercontextprovider.jsx

// Every context has a provider in this the our provider is UserContext
// wrap up ur components in UserContext whenever u wrap all componets it will form into a provider
// all ur components in provider all can access the through userContext to state
// Context is like a global variable
{
  /* <UserContext>
    <Login/>
    <Card/>
</UserContext> */
}
