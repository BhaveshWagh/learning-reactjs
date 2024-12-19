// DropdownWithInputField 
const data= ["Option 1", "Option 2", "Option 3"]

import React, { useState } from "react";

const DropdownWithInputField = () => {
  const [options, setOptions] = useState(data);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "" && !options.includes(inputValue)) {
      setOptions((prevOptions) => [...prevOptions, inputValue.trim()]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <label htmlFor="dropdown-input" style={{ display: "block", marginBottom: "10px" }}>
        Select or Enter a Value:
      </label>
      <input
        list="dropdown-options"
        id="dropdown-input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Select or type..."
        style={{
          width: "300px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <datalist id="dropdown-options">
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
    </div>
  );
};

export default DropdownWithInputField;
