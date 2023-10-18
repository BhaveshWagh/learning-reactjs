import { useState, useEffect } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

// import { useState, useEffect } from "react";

// const DisplayListItem = () => {
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState()
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         const data = await response.json();
//         setItems(data);
//       } catch (error) {
//         // console.log("Error: ", error);
//         setError(error)
//       }
//     };
//     fetchData();
//   }, []);

//     // useEffect(() => {
//     //   const fetchItems = async () => {
//     //     try {
//     //       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     //       const data = await response.json();
//     //       setItems(data);
//     //     } catch (error) {
//     //       console.error('Error fetching items:', error);
//     //     }
//     //   };

//     //   fetchItems();
//     // }, []);

//   return (
//     <div>
//       <h2>Item List</h2>
//       {error ? (
//         <div>Error: {error}</div>
//       ) : (
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       )}

//       {/* <ul>
//         {items && items.slice(0,10).map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default DisplayListItem;
