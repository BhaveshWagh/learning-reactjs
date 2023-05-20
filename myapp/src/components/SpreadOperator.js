import React, { useState } from "react";
import Employee from "./Employee";
import "./styles.css";

const emp = [
  { name: "Bhavesh", id: "2711" },
  { name: "Kapil", id: "1212" }
];
export default function App() {
  // const arr1 = [1,2,5]
  // const arr2 = [0,3,4]
  // const arr3 = [...arr1,...arr2]
  // console.log(arr3)
  const baseEmpObj = {
    role: "employee",
    company: "CodeSandy"
  };
  const firstEmp = { ...baseEmpObj, ...emp[0] };
  console.log(firstEmp);

  return (
    <div className="App">
      {/* <Employee name={firstEmp.name} id={firstEmp.id} /> */}
      <Employee {...firstEmp} />
    </div>
  );
}
