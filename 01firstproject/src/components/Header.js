import React from "react";

export const Header = (props) => {
  return (
    <div>
      <h4>Hello, {props.name} - {props.last}</h4>
      {props.children}
    </div>
  );
};

// export default Header;
