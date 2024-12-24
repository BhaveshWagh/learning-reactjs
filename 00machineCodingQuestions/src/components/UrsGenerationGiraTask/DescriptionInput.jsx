import React from "react";

const DescriptionInput = ({ description, setDescription }) => {
  return (
    <div>
      <h3>Description</h3>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
        style={{ width: "100%", padding: "10px", border: "1px solid #ccc" }}
      ></textarea>
    </div>
  );
};

export default DescriptionInput;
