import React from "react";

const VersionInput = ({ version, setVersion }) => {
  return (
    <div>
      <h3>Version</h3>
      <input
        type="text"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
        style={{ width: "100%", padding: "10px", border: "1px solid #ccc" }}
      />
    </div>
  );
};

export default VersionInput;
