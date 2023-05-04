import React from "react";

const Employee = (props) => {
    // console.log(props)
    const {firstName, lastName, age} = props;
  return (
    <React.Fragment>
  {/*<h5>Employee Name : {props.firstName} {props.lastName}</h5>*/}
  <h5>Employee Name : {firstName} {lastName} Who's age is : {age}</h5>
    </React.Fragment>
    
  )
};
 
export default Employee;
