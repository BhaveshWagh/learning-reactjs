import React from "react";

const Button = ({ title = "Nothing" }) => {
  return (
    <React.Fragment>
      <button className="button">{title}</button>
    </React.Fragment>
  );
};

export default Button;
