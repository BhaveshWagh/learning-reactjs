import { useState } from "react";

const DropDown = () => {
  const [state, setState] = useState(0);

  const states = [
    {
      id: 1,
      name: "Maharashtra",
      cities: ["Mumbai", "Pune", "Dhule"],
    },
    {
      id: 2,
      name: "Delhi",
      cities: ["Delhi", "New Delhi"],
    },
    {
      id: 3,
      name: "Gujrat",
      cities: ["Surat", "Vapi", "Badodra"],
    },
  ];
  return (
    <div>
      {/* DropDown 1 */}
      <select
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          console.log(e.target.value);
        }}
      >
        {states.map((item, index) => {
         return <option value={index}>{item.name}</option>
        })}
      </select>

      <select value={state}>
        {states[state].cities.map((item,index)=>{
          return <option value={index}>{item}</option>
        })}
      </select>
    </div>
  );
};

export default DropDown;
