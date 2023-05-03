import React from "react";

const Employee = (props) => {
    // console.log(props)
  return (
    <React.Fragment>
    <h5>Employee Name : {props.firstName} {props.lastName}</h5>
    </React.Fragment>
    
  )
};

export default Employee;
