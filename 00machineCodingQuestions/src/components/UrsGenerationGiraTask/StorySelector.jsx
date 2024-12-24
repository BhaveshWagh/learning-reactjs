import React, { useState, useRef, useEffect } from "react";
import "./StorySelector.css"; // Import the CSS file

const StorySelector = ({ stories, setStories, selectedEpic }) => {
  const [inputValue, setInputValue] = useState("");
  const [availableSuggestions, setAvailableSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (selectedEpic) {
      const filteredStories = selectedEpic.stories.filter(
        (story) => !stories.includes(story)
      );
      setAvailableSuggestions(filteredStories);
    } else {
      setAvailableSuggestions([]);
    }
  }, [selectedEpic, stories]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = selectedEpic
      ? selectedEpic.stories.filter(
          (story) =>
            story.toLowerCase().includes(value.toLowerCase()) &&
            !stories.includes(story)
        )
      : [];
    setAvailableSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (story) => {
    if (!stories.includes(story)) {
      setStories([...stories, story]);
    }
    setInputValue(""); // Clear input
    setShowSuggestions(false); // Hide suggestions
  };

  const handleRemove = (story) => {
    setStories((prevStories) => prevStories.filter((s) => s !== story));
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="story-selector-container">
      <h3>Stories</h3>
      <div className="story-selector-input-wrapper">
        {stories.map((story, index) => (
          <span key={index} className="selected-story">
            {story}
            <button
              onClick={() => handleRemove(story)}
              className="remove-story-button"
            >
              &times;
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder={
            selectedEpic ? "Search and select a story" : "Select an epic first"
          }
          className="story-selector-input"
          disabled={!selectedEpic}
        />
      </div>
      {showSuggestions && availableSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {availableSuggestions.map((story, index) => (
            <li
              key={index}
              className="suggestion-item"
              onClick={() => handleSelect(story)}
            >
              {story}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StorySelector;
