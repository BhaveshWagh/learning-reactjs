import React from "react";

const Mapping = (props) => {
  const { firstName, employeeId } = props;
  return (
    <React.Fragment>
      <h6>{`Name : ${firstName} Id : ${employeeId}`}</h6>
    </React.Fragment>
  );
};

export default Mapping;


// Below code add it to app.js in return jsx
//  {employeeInfo.map((emp) => (
// <Mapping key={emp.employeeId} firstName={emp.firstName} employeeId={emp.employeeId} />
// ))}