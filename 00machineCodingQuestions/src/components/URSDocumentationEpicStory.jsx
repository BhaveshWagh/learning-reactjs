
// import React, { useState, useRef, useEffect } from "react";
// import { dummyEpics } from "./data";

// const EpicSelector = ({ epics, setEpics }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [availableSuggestions, setAvailableSuggestions] = useState(dummyEpics);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const containerRef = useRef(null);

//   // Filter suggestions based on input value
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     const filtered = dummyEpics.filter(
//       (epic) =>
//         epic.toLowerCase().includes(value.toLowerCase()) &&
//         !epics.includes(epic)
//     );
//     setAvailableSuggestions(filtered);
//     setShowSuggestions(true);
//   };

//   const handleSelect = (epic) => {
//     if (!epics.includes(epic)) {
//       setEpics([...epics, epic]);
//     }
//     setAvailableSuggestions((prevSuggestions) =>
//       prevSuggestions.filter((e) => e !== epic)
//     );

//     setInputValue(""); // Clear input
//     setShowSuggestions(false); // Hide suggestions
//   };

//   const handleRemove = (epic) => {
//     setEpics((prevEpics) => prevEpics.filter((e) => e !== epic));
//     setAvailableSuggestions((prevSuggestions) => [...prevSuggestions, epic]);
//   };

//   const handleClickOutside = (event) => {
//     if (containerRef.current && !containerRef.current.contains(event.target)) {
//       setShowSuggestions(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div ref={containerRef}>
//       <h3>Epics</h3>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           border: "1px solid #ccc",
//           padding: "5px",
//           borderRadius: "5px",
//           position: "relative",
//         }}
//       >
//         {epics.map((epic, index) => (
//           <span
//             key={index}
//             style={{
//               display: "inline-block",
//               padding: "5px 10px",
//               margin: "3px",
//               border: "1px solid #ccc",
//               borderRadius: "3px",
//               backgroundColor: "#d4edda",
//               position: "relative",
//             }}
//           >
//             {epic}
//             <button
//               onClick={() => handleRemove(epic)}
//               style={{
//                 background: "red",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50%",
//                 padding: "5px",
//                 fontSize: "12px",
//                 cursor: "pointer",
//                 marginLeft: "5px",
//               }}
//             >
//               &times;
//             </button>
//           </span>
//         ))}
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           onFocus={() => setShowSuggestions(true)}
//           placeholder="Search and select an epic"
//           style={{
//             flex: 1,
//             border: "none",
//             outline: "none",
//             padding: "5px",
//             minWidth: "100px",
//           }}
//         />
//       </div>
//       {showSuggestions && availableSuggestions.length > 0 && (
//         <ul
//           style={{
//             listStyle: "none",
//             padding: 0,
//             border: "1px solid #ccc",
//             marginTop: "5px",
//             maxHeight: "150px",
//             overflowY: "auto",
//             position: "absolute",
//             background: "white",
//             zIndex: 1000,
//           }}
//         >
//           {availableSuggestions.map((epic, index) => (
//             <li
//               key={index}
//               style={{
//                 padding: "8px",
//                 cursor: "pointer",
//                 backgroundColor: "#f9f9f9",
//                 borderBottom: "1px solid #ddd",
//               }}
//               onClickCapture={() => handleSelect(epic)}
//             >
//               {epic}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default EpicSelector;



// // import React, { useState, useRef, useEffect } from "react";
// // import { dummyEpics } from "./data"; // Import dummy data for epics

// // const EpicSelector = ({ epics, setEpics }) => {
// //   const [inputValue, setInputValue] = useState("");
// //   const [availableSuggestions, setAvailableSuggestions] = useState(dummyEpics); // Maintain a list of available suggestions
// //   const [showSuggestions, setShowSuggestions] = useState(false); // State to control visibility of suggestions
// //   const containerRef = useRef(null); // Reference to the selector container

// //   // Filter suggestions based on input value
// //   const handleInputChange = (e) => {
// //     const value = e.target.value;
// //     setInputValue(value);

// //     const filtered = dummyEpics.filter(
// //       (epic) =>
// //         epic.toLowerCase().includes(value.toLowerCase()) &&
// //         !epics.includes(epic)
// //     );
// //     setAvailableSuggestions(filtered);
// //     setShowSuggestions(true); // Show suggestions while typing
// //   };

// //   const handleSelect = (epic) => {
// //     // Add selected epic to state and remove it from available suggestions
// //     if (!epics.includes(epic)) {
// //       setEpics([...epics, epic]);
// //     }
// //     setAvailableSuggestions((prevSuggestions) =>
// //       prevSuggestions.filter((s) => s !== epic)
// //     );

// //     setInputValue(""); // Clear the input field
// //     setShowSuggestions(false); // Hide suggestions after selection
// //   };

// //   const handleRemove = (epic) => {
// //     // Remove the epic from selected epics
// //     setEpics((prevEpics) => prevEpics.filter((s) => s !== epic));

// //     // Add the removed epic back to availableSuggestions
// //     setAvailableSuggestions((prevSuggestions) => [...prevSuggestions, epic]);
// //   };

// //   const handleClickOutside = (event) => {
// //     if (containerRef.current && !containerRef.current.contains(event.target)) {
// //       setShowSuggestions(false); // Hide suggestions if clicking outside
// //     }
// //   };

// //   useEffect(() => {
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   return (
// //     <div ref={containerRef}>
// //       <h3>Epics</h3>
// //       <input
// //         type="text"
// //         value={inputValue}
// //         onChange={handleInputChange}
// //         onFocus={() => setShowSuggestions(true)} // Show suggestions when the input is focused
// //         placeholder="Search and select an epic"
// //         style={{ width: "100%", padding: "10px", border: "1px solid #ccc" }}
// //       />
// //       {showSuggestions && availableSuggestions.length > 0 && (
// //         <ul
// //           style={{
// //             listStyle: "none",
// //             padding: 0,
// //             border: "1px solid #ccc",
// //             marginTop: "5px",
// //             maxHeight: "150px",
// //             overflowY: "auto",
// //             position: "absolute", // Position the suggestions dropdown
// //             background: "white",
// //             zIndex: 1000,
// //           }}
// //         >
// //           {availableSuggestions.map((epic, index) => (
// //             <li
// //               key={index}
// //               style={{
// //                 padding: "8px",
// //                 cursor: "pointer",
// //                 backgroundColor: "#f9f9f9",
// //                 borderBottom: "1px solid #ddd",
// //               }}
// //               onClickCapture={() => handleSelect(epic)} // Use onClickCapture to handle the selection
// //             >
// //               {epic}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //       <div style={{ marginTop: "10px" }}>
// //         <strong>Selected Epics:</strong>
// //         <div>
// //           {epics.map((epic, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 display: "inline-block",
// //                 padding: "5px 10px",
// //                 margin: "5px",
// //                 border: "1px solid #ccc",
// //                 borderRadius: "3px",
// //                 backgroundColor: "#d1ecf1",
// //                 position: "relative",
// //               }}
// //             >
// //               {epic}
// //               <button
// //                 onClick={() => handleRemove(epic)}
// //                 style={{
// //                   background: "red",
// //                   color: "white",
// //                   border: "none",
// //                   borderRadius: "50%",
// //                   padding: "5px",
// //                   fontSize: "12px",
// //                   cursor: "pointer",
// //                   position: "absolute",
// //                   top: "-5px",
// //                   right: "-5px",
// //                 }}
// //               >
// //                 &times;
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EpicSelector;

