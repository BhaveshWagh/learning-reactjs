import React, { useState } from "react";

const HideSecondBtn = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div>
      <button onClick={() => setIsHidden(false)}>
        Click to Hide Second button
      </button>
      {isHidden && <button>Btn 2</button>}
    </div>
  );
};

export default HideSecondBtn;
