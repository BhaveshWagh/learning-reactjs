import React from "react";
import "./DetailsInput.css";
const DetailsInput = ({ description, setDescription, version, setVersion }) => {
  return (
    <div>
      <div>
        <h3>Description</h3>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          placeholder="Enter description"
        ></textarea>
      </div>

      <div>
        <h3>Version</h3>
        <input
          type="text"
          value={version}
          placeholder="Enter version"
          onChange={(e) => setVersion(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DetailsInput;
