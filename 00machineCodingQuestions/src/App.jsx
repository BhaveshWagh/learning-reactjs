import React, { useState } from "react";
import EpicSelector from "./components/UrsGenerationGiraTask/EpicSelector";
import StorySelector from "./components/UrsGenerationGiraTask/StorySelector";
// import DescriptionInput from "./components/UrsGenerationGiraTask/DescriptionInput";
// import VersionInput from "./components/UrsGenerationGiraTask/VersionInput";
import URSDocument from "./components/UrsGenerationGiraTask/URSDocument";
import DetailsInput from "./components/UrsGenerationGiraTask/DetailsInput";
import "./App.css";

const App = () => {
  const [epics, setEpics] = useState([]);
  const [stories, setStories] = useState([]);
  const [description, setDescription] = useState("");
  const [version, setVersion] = useState("");
  const [selectedEpic, setSelectedEpic] = useState(null);
  return (
    <div className="container">
      <h1>User Requirement Specification</h1>

      <EpicSelector
        epics={epics}
        setEpics={setEpics}
        setSelectedEpic={setSelectedEpic}
      />
      <StorySelector
        stories={stories}
        setStories={setStories}
        selectedEpic={selectedEpic}
      />
      <DetailsInput
        description={description}
        setDescription={setDescription}
        version={version}
        setVersion={setVersion}
      />
      {/* <DescriptionInput
        description={description}
        setDescription={setDescription}
      />
      <VersionInput version={version} setVersion={setVersion} /> */}

      <URSDocument
        epics={epics}
        stories={stories}
        description={description}
        version={version}
      />
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   // Dummy data for Epics and Stories
//   const epicData = [
//     { id: "HOL-Epic-001", name: "HOL-Epic-001" },
//     { id: "HOL-Epic-002", name: "HOL-Epic-002" },
//     { id: "HOL-Epic-003", name: "HOL-Epic-003" },
//   ];

//   const storyData = {
//     "HOL-Epic-001": [
//       { id: "HOL-Story-006", name: "HOL-Story-006" },
//       { id: "HOL-Story-007", name: "HOL-Story-007" },
//     ],
//     "HOL-Epic-002": [
//       { id: "HOL-Story-008", name: "HOL-Story-008" },
//       { id: "HOL-Story-009", name: "HOL-Story-009" },
//     ],
//     "HOL-Epic-003": [
//       { id: "HOL-Story-010", name: "HOL-Story-010" },
//       { id: "HOL-Story-011", name: "HOL-Story-011" },
//     ],
//   };

//   // State management
//   const [selectedEpics, setSelectedEpics] = useState([]);
//   const [selectedStories, setSelectedStories] = useState([]);
//   const [filteredStories, setFilteredStories] = useState([]);
//   const [description, setDescription] = useState("");
//   const [version, setVersion] = useState("");

//   // Handle Epic selection
//   const handleEpicChange = (e) => {
//     const epicId = e.target.value;
//     if (!selectedEpics.includes(epicId)) {
//       setSelectedEpics([...selectedEpics, epicId]);
//       setFilteredStories([...new Set([...filteredStories, ...(storyData[epicId] || [])])]); // Add related stories
//     }
//   };

//   // Handle Story selection
//   const handleStoryChange = (e) => {
//     const storyId = e.target.value;
//     if (!selectedStories.includes(storyId)) {
//       setSelectedStories([...selectedStories, storyId]);
//     }
//   };

//   // Remove selected Epic
//   const removeEpic = (epicId) => {
//     setSelectedEpics(selectedEpics.filter((epic) => epic !== epicId));
//     setFilteredStories(storyData[epicId] || []);
//     setSelectedStories(selectedStories.filter((story) => !storyData[epicId]?.find((s) => s.id === story)));
//   };

//   // Remove selected Story
//   const removeStory = (storyId) => {
//     setSelectedStories(selectedStories.filter((story) => story !== storyId));
//   };

//   return (
//     <div className="container">
//       <h1 className="title">User Requirement Specification</h1>

//       {/* Epic Input with Multiple Selection */}
//       <div className="form-group">
//         <label className="form-label">Epics:</label>
//         <div className="input-wrapper">
//           <input
//             className="form-input"
//             list="epic-list"
//             placeholder="Select multiple Epics"
//             onChange={handleEpicChange}
//           />
//           <datalist id="epic-list">
//             {epicData.map((epic) => (
//               <option key={epic.id} value={epic.id}>
//                 {epic.name}
//               </option>
//             ))}
//           </datalist>
//         </div>

//         {/* Display Selected Epics with Remove Option */}
//         <div className="selected-items">
//           {selectedEpics.map((epicId) => {
//             const epic = epicData.find((ep) => ep.id === epicId);
//             return (
//               <div key={epicId} className="selected-item">
//                 <span>{epic.name}</span>
//                 <button className="remove-icon" onClick={() => removeEpic(epicId)}>
//                   &times;
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Story Input with Multiple Selection */}
//       <div className="form-group">
//         <label className="form-label">Stories:</label>
//         <div className="input-wrapper">
//           <input
//             className="form-input"
//             list="story-list"
//             placeholder="Select multiple Stories"
//             onChange={handleStoryChange}
//           />
//           <datalist id="story-list">
//             {filteredStories.map((story) => (
//               <option key={story.id} value={story.id}>
//                 {story.name}
//               </option>
//             ))}
//           </datalist>
//         </div>

//         {/* Display Selected Stories with Remove Option */}
//         <div className="selected-items">
//           {selectedStories.map((storyId) => {
//             const story = filteredStories.find((st) => st.id === storyId);
//             return (
//               <div key={storyId} className="selected-item">
//                 <span>{story.name}</span>
//                 <button className="remove-icon" onClick={() => removeStory(storyId)}>
//                   &times;
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Description Input */}
//       <div className="form-group">
//         <label className="form-label">Description:</label>
//         <textarea
//           className="form-textarea"
//           placeholder="Enter story description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//       </div>

//       {/* Version Input */}
//       <div className="form-group">
//         <label className="form-label">Version:</label>
//         <input
//           className="form-input"
//           type="text"
//           placeholder="Enter story version"
//           value={version}
//           onChange={(e) => setVersion(e.target.value)}
//         />
//       </div>

//       {/* Output Section */}
//       <h2 className="subtitle">User Requirement Specification Document</h2>
//       <div className="output-section">
//         <p><strong>Description:</strong> {description}</p>
//         <p><strong>Version:</strong> {version}</p>
//         <ul>
//           {selectedEpics.length > 0 && (
//             <li>
//               {selectedEpics.map((epicId) => {
//                 const epic = epicData.find((ep) => ep.id === epicId);
//                 return `1.0.0 ${epic.name} - This is the summary`;
//               })}
//               {selectedStories.length > 0 && (
//                 <ul>
//                   {selectedStories.map((storyId) => {
//                     const story = filteredStories.find((st) => st.id === storyId);
//                     return <li key={storyId}>{`1.1.0 ${story.name} - This is the summary`}</li>;
//                   })}
//                 </ul>
//               )}
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   // Dummy data for Epics and Stories
//   const epicData = [
//     { id: "HOL-Epic-001", name: "HOL-Epic-001" },
//     { id: "HOL-Epic-002", name: "HOL-Epic-002" },
//     { id: "HOL-Epic-003", name: "HOL-Epic-003" },
//   ];

//   const storyData = {
//     "HOL-Epic-001": [
//       { id: "HOL-Story-006", name: "HOL-Story-006" },
//       { id: "HOL-Story-007", name: "HOL-Story-007" },
//     ],
//     "HOL-Epic-002": [
//       { id: "HOL-Story-008", name: "HOL-Story-008" },
//       { id: "HOL-Story-009", name: "HOL-Story-009" },
//     ],
//     "HOL-Epic-003": [
//       { id: "HOL-Story-010", name: "HOL-Story-010" },
//       { id: "HOL-Story-011", name: "HOL-Story-011" },
//     ],
//   };

//   // State management
//   const [selectedEpics, setSelectedEpics] = useState([]);
//   const [filteredStories, setFilteredStories] = useState([]);
//   const [selectedStory, setSelectedStory] = useState("");
//   const [description, setDescription] = useState("");
//   const [version, setVersion] = useState("");

//   // Handle Epic selection
//   const handleEpicChange = (e) => {
//     const epicId = e.target.value;
//     if (!selectedEpics.includes(epicId)) {
//       setSelectedEpics([...selectedEpics, epicId]);
//       setFilteredStories(storyData[epicId] || []);
//     }
//     setSelectedStory("");
//   };

//   // Handle Story selection
//   const handleStoryChange = (e) => {
//     setSelectedStory(e.target.value);
//   };

//   // Remove selected Epic
//   const removeEpic = (epicId) => {
//     setSelectedEpics(selectedEpics.filter((epic) => epic !== epicId));
//     setFilteredStories(storyData[epicId] || []);
//     setSelectedStory("");
//   };

//   // Remove selected Story
//   const removeStory = () => {
//     setSelectedStory("");
//   };

//   return (
//     <div className="container">
//       <h1 className="title">User Requirement Specification</h1>

//       {/* Epic Input with Multiple Selection */}
//       <div className="form-group">
//         <label className="form-label">Epics:</label>
//         <div className="input-wrapper">
//           <input
//             className="form-input"
//             list="epic-list"
//             placeholder="Select multiple Epics"
//             onChange={handleEpicChange}
//           />
//           <datalist id="epic-list">
//             {epicData.map((epic) => (
//               <option key={epic.id} value={epic.id}>
//                 {epic.name}
//               </option>
//             ))}
//           </datalist>
//         </div>

//         {/* Display Selected Epics with Remove Option */}
//         <div className="selected-epics">
//           {selectedEpics.map((epicId) => {
//             const epic = epicData.find((ep) => ep.id === epicId);
//             return (
//               <div key={epicId} className="selected-epic">
//                 <span>{epic.name}</span>
//                 <button className="remove-icon" onClick={() => removeEpic(epicId)}>
//                   &times;
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Story Input with Datalist */}
//       <div className="form-group">
//         <label className="form-label">Stories:</label>
//         <div className="datalist-wrapper">
//           <input
//             className="form-input"
//             list="story-list"
//             placeholder="Select a story"
//             value={selectedStory}
//             onChange={handleStoryChange}
//           />
//           {selectedStory && (
//             <button className="remove-icon" onClick={removeStory}>
//               &times;
//             </button>
//           )}
//         </div>
//         <datalist id="story-list">
//           {filteredStories.map((story) => (
//             <option key={story.id} value={story.id}>
//               {story.name}
//             </option>
//           ))}
//         </datalist>
//       </div>

//       {/* Description Input */}
//       <div className="form-group">
//         <label className="form-label">Description:</label>
//         <textarea
//           className="form-textarea"
//           placeholder="Enter story description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//       </div>

//       {/* Version Input */}
//       <div className="form-group">
//         <label className="form-label">Version:</label>
//         <input
//           className="form-input"
//           type="text"
//           placeholder="Enter story version"
//           value={version}
//           onChange={(e) => setVersion(e.target.value)}
//         />
//       </div>

//       {/* Output Section */}
//       <h2 className="subtitle">User Requirement Specification Document</h2>
//       <div className="output-section">
//         <p><strong>Description:</strong> {description}</p>
//         <p><strong>Version:</strong> {version}</p>
//         <ul>
//           {selectedEpics.length > 0 && (
//             <li>
//               {selectedEpics.map((epicId) => {
//                 const epic = epicData.find((ep) => ep.id === epicId);
//                 return `1.0.0 ${epic.name} - This is the summary`;
//               })}
//               {selectedStory && (
//                 <ul>
//                   <li>
//                     {`1.1.0 ${selectedStory} - This is the summary`}
//                   </li>
//                 </ul>
//               )}
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   // Dummy data for Epics and Stories
//   const epicData = [
//     { id: "HOL-Epic-001", name: "HOL-Epic-001" },
//     { id: "HOL-Epic-002", name: "HOL-Epic-002" },
//   ];

//   const storyData = {
//     "HOL-Epic-001": [
//       { id: "HOL-Story-006", name: "HOL-Story-006" },
//       { id: "HOL-Story-007", name: "HOL-Story-007" },
//     ],
//     "HOL-Epic-002": [
//       { id: "HOL-Story-008", name: "HOL-Story-008" },
//       { id: "HOL-Story-009", name: "HOL-Story-009" },
//     ],
//   };

//   // State management
//   const [selectedEpic, setSelectedEpic] = useState("");
//   const [filteredStories, setFilteredStories] = useState([]);
//   const [selectedStory, setSelectedStory] = useState("");
//   const [description, setDescription] = useState("");
//   const [version, setVersion] = useState("");

//   // Handle Epic selection
//   const handleEpicChange = (e) => {
//     const epicId = e.target.value;
//     setSelectedEpic(epicId);
//     setFilteredStories(storyData[epicId] || []);
//     setSelectedStory("");
//   };

//   // Handle Story selection
//   const handleStoryChange = (e) => {
//     setSelectedStory(e.target.value);
//   };

//   // Remove selected Epic
//   const removeEpic = () => {
//     setSelectedEpic("");
//     setFilteredStories([]);
//     setSelectedStory("");
//   };

//   // Remove selected Story
//   const removeStory = () => {
//     setSelectedStory("");
//   };

//   return (
//     <div className="container">
//       <h1 className="title">User Requirement Specification</h1>

//       {/* Epic Input with Datalist */}
//       <div className="form-group">
//         <label className="form-label">Epic:</label>
//         <div className="input-wrapper">
//           <input
//             className="form-input"
//             list="epic-list"
//             placeholder="Enter or select an Epic"
//             value={selectedEpic}
//             onChange={handleEpicChange}
//           />
//           {selectedEpic && (
//             <button className="remove-icon" onClick={removeEpic}>
//               &times;
//             </button>
//           )}
//         </div>
//         <datalist id="epic-list">
//           {epicData.map((epic) => (
//             <option key={epic.id} value={epic.id}>
//               {epic.name}
//             </option>
//           ))}
//         </datalist>
//       </div>

//       {/* Story Input with Datalist */}
//       <div className="form-group">
//         <label className="form-label">Stories:</label>
//         <div className="input-wrapper">
//           <input
//             className="form-input"
//             list="story-list"
//             placeholder="Hover to view or select a story"
//             value={selectedStory}
//             onChange={handleStoryChange}
//           />
//           {selectedStory && (
//             <button className="remove-icon" onClick={removeStory}>
//               &times;
//             </button>
//           )}
//         </div>
//         <datalist id="story-list">
//           {filteredStories.map((story) => (
//             <option key={story.id} value={story.id}>
//               {story.name}
//             </option>
//           ))}
//         </datalist>
//       </div>

//       {/* Description Input */}
//       <div className="form-group">
//         <label className="form-label">Description:</label>
//         <textarea
//           className="form-textarea"
//           placeholder="Enter story description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//       </div>

//       {/* Version Input */}
//       <div className="form-group">
//         <label className="form-label">Version:</label>
//         <input
//           className="form-input"
//           type="text"
//           placeholder="Enter story version"
//           value={version}
//           onChange={(e) => setVersion(e.target.value)}
//         />
//       </div>

//       {/* Output Section */}
//       <h2 className="subtitle">User Requirement Specification Document</h2>
//       <div className="output-section">
//         <p><strong>Description:</strong> {description}</p>
//         <p><strong>Version:</strong> {version}</p>
//         <ul>
//           {selectedEpic && (
//             <li>
//               {`1.0.0 ${selectedEpic} - This is the summary`}
//               {selectedStory && (
//                 <ul>
//                   <li>
//                     {`1.1.0 ${selectedStory} - This is the summary`}
//                   </li>
//                 </ul>
//               )}
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   // Dummy data for Epics and Stories
//   const epicData = [
//     { id: "HOL-Epic-001", name: "HOL-Epic-001" },
//     { id: "HOL-Epic-002", name: "HOL-Epic-002" },
//   ];

//   const storyData = {
//     "HOL-Epic-001": [
//       { id: "HOL-Story-006", name: "HOL-Story-006" },
//       { id: "HOL-Story-007", name: "HOL-Story-007" },
//     ],
//     "HOL-Epic-002": [
//       { id: "HOL-Story-008", name: "HOL-Story-008" },
//       { id: "HOL-Story-009", name: "HOL-Story-009" },
//     ],
//   };

//   // State management
//   const [selectedEpic, setSelectedEpic] = useState("");
//   const [filteredStories, setFilteredStories] = useState([]);
//   const [selectedStory, setSelectedStory] = useState("");
//   const [description, setDescription] = useState("");
//   const [version, setVersion] = useState("");

//   // Handle Epic selection
//   const handleEpicChange = (e) => {
//     const epicId = e.target.value;
//     setSelectedEpic(epicId);
//     setFilteredStories(storyData[epicId] || []);
//     setSelectedStory("");
//   };

//   // Handle Story selection
//   const handleStoryChange = (e) => {
//     setSelectedStory(e.target.value);
//   };

//   return (
//     <div className="container">
//       <h1 className="title">User Requirement Specification</h1>

//       {/* Epic Input with Datalist */}
//       <div className="form-group">
//         <label className="form-label">Epic:</label>
//         <input
//           className="form-input"
//           list="epic-list"
//           placeholder="Enter or select an Epic"
//           value={selectedEpic}
//           onChange={handleEpicChange}
//         />
//         <datalist id="epic-list">
//           {epicData.map((epic) => (
//             <option key={epic.id} value={epic.id}>
//               {epic.name}
//             </option>
//           ))}
//         </datalist>
//       </div>

//       {/* Story Input with Datalist */}
//       <div className="form-group">
//         <label className="form-label">Stories:</label>
//         <input
//           className="form-input"
//           list="story-list"
//           placeholder="Hover to view or select a story"
//           value={selectedStory}
//           onChange={handleStoryChange}
//         />
//         <datalist id="story-list">
//           {filteredStories.map((story) => (
//             <option key={story.id} value={story.id}>
//               {story.name}
//             </option>
//           ))}
//         </datalist>
//       </div>

//       {/* Description Input */}
//       <div className="form-group">
//         <label className="form-label">Description:</label>
//         <textarea
//           className="form-textarea"
//           placeholder="Enter story description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//       </div>

//       {/* Version Input */}
//       <div className="form-group">
//         <label className="form-label">Version:</label>
//         <input
//           className="form-input"
//           type="text"
//           placeholder="Enter story version"
//           value={version}
//           onChange={(e) => setVersion(e.target.value)}
//         />
//       </div>

//       {/* Output Section */}
//       <h2 className="subtitle">User Requirement Specification Document</h2>
//       <div className="output-section">
//         <p><strong>Description:</strong> {description}</p>
//         <p><strong>Version:</strong> {version}</p>
//         <ul>
//           {selectedEpic && (
//             <li>
//               {`1.0.0 ${selectedEpic} - This is the summary`}
//               {selectedStory && (
//                 <ul>
//                   <li>
//                     {`1.1.0 ${selectedStory} - This is the summary`}
//                   </li>
//                 </ul>
//               )}
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;
