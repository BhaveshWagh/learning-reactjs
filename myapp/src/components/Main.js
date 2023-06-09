import React from "react";
import Employee from "./Employee";
const Main = () => {
  const employeeInfo = [
    {
      firstName: "Akshay",
      lastName: "Winstin",
      age: "23",
      employeeId: "1",
    },
    {
      firstName: "Sumit",
      lastName: "pimple",
      age: "30",
      employeeId: "2",
    },
    {
      firstName: "Vaibhav",
      lastName: "Sundera",
      age: "24",
      employeeId: "3",
    },
    {
      firstName: "Jasmin",
      lastName: "Futera",
      age: "25",
      employeeId: "4",
    },
  ];

  return (
    <React.Fragment>
      <h1> Company Directory</h1>
      {employeeInfo.map((employee) => {
        // const { firstName, lastName, age } = employee ;
        return (
          <Employee key={employee.employeeId} {...employee} />
          /*<Employee firstName={firstName} lastName={lastName} age={age} />*/
        );
      })}

      {/*<Employee firstName="Mayur" lastName="Patil" age="14" />
    <Employee firstName="Dinesh" lastName="Ishi" age="15" />
    <Employee firstName="Moreshwar" lastName="Wagh" age="16" />
    <Employee firstName="Kapil" lastName="Wagh" age="17" /> */}
    </React.Fragment>
  );
};

export default Main;
