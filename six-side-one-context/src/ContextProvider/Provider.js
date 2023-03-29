import React, { useState } from "react";

import PackageContext from "./Context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: "Go to Goa",
    agent: "007",
    accept: "Not accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "ACCEPTED" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
