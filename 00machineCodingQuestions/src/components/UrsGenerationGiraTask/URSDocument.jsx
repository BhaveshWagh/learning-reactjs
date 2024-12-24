import React from "react";
import "./URSDocument.css";
const URSDocument = ({ epics, stories, description, version }) => {
  return (
    <div className="information">
      <h2>User Requirement Specification Document</h2>

      <div className="epic-info">
        <div className="discription">
          <strong>Description:</strong> {description}
        </div>
        <div className="version">
          <strong>Version:</strong> {version}
        </div>
        <hr />
        <ul>
          {epics.length > 0 &&
            epics.map((epic, index) => (
              <li key={index}>
                <strong>{`1.0.0 ${epic} - This is the summary`}</strong>
                {/* You can replace "This is the summary" with actual data */}
                <ul>
                  {stories.length > 0 &&
                    stories.map((story, storyIndex) => (
                      <li key={storyIndex}>
                        {`1.1.0 ${story} - This is the summary`}
                        {/* Replace with actual data as needed */}
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default URSDocument;
