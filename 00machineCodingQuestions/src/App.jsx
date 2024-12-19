import { useState } from "react";
import "./App.css";
import DropdownWithInputField from "./components/DropdownWithInputField";
const data = ["Option 1", "Option 2", "Option 3"];
function App() {
  const [options, setOptions] = useState(data);
  return (
    <>
      {/* <h1>Interview Questions</h1>
       */}
      <h1>User Requirement Specification</h1>
      <DropdownWithInputField />
      
      <form>
        <label for="epic">Epic</label>
        <input type="text" name="epic" placeholder="select epic"></input>
        <datalist id="dropdown-list">
          {options.map((opt) => (
            <option value={opt}></option>
          ))}
        </datalist>

        <label for="stories">Stories</label>
        <input type="text" name="stories" placeholder="select stories"></input>
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Enter story description"
        ></input>
        <label for="version">Version</label>
        <input
          type="text"
          name="version"
          placeholder="Enter story version"
        ></input>

        <select>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
      </form>
    </>
  );
}

export default App;
