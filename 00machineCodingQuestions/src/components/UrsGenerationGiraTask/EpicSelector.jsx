import React, { useState, useRef, useEffect } from "react";
import { dummyData } from "./data";
import "./EpicSelector.css"; // Import the CSS file

const EpicSelector = ({ epics, setEpics, setSelectedEpic }) => {
  const [inputValue, setInputValue] = useState("");
  const [availableSuggestions, setAvailableSuggestions] = useState(
    dummyData.epics.map((epic) => epic.name)
  );
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter the suggestions based on input value and already selected epics
    const filtered = dummyData.epics
      .map((epic) => epic.name)
      .filter(
        (name) =>
          name.toLowerCase().includes(value.toLowerCase()) &&
          !epics.includes(name)
      );
    setAvailableSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (epicName) => {
    // If epicName is not already in the list of selected epics, add it
    if (!epics.includes(epicName)) {
      setEpics([...epics, epicName]);
      const epic = dummyData.epics.find((epic) => epic.name === epicName);
      if (epic) {
        setSelectedEpic(epic); // Notify the parent about the selected epic
      }
      // Remove selected epic from suggestions list
      setAvailableSuggestions(
        availableSuggestions.filter((name) => name !== epicName)
      );
    }
    setInputValue(""); // Clear input
    setShowSuggestions(false); // Hide suggestions
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  const handleRemoveEpic = (epicName) => {
    // Remove selected epic
    setEpics(epics.filter((epic) => epic !== epicName));
    setSelectedEpic(null); // Clear selected epic if necessary
    // Add the removed epic back to the suggestions list
    setAvailableSuggestions((prevSuggestions) => [
      ...prevSuggestions,
      epicName,
    ]);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <h3>Epic</h3>
      <div className="epic-container">
        {epics.map((epic, index) => (
          <span key={index} className="selected-epic">
            {epic}
            <button onClick={() => handleRemoveEpic(epic)}>&times;</button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search and select an epic"
          className="input-field"
        />
      </div>
      {showSuggestions && availableSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {availableSuggestions.map((name, index) => (
            <li
              key={index}
              className="suggestion-item"
              onClick={() => handleSelect(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EpicSelector;
