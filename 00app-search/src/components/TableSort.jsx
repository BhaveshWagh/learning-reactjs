/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
const URL = "https://reqres.in/api/users";
export default function Table() {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        const sortedData = data.data.sort((a, b) =>
          a.first_name.localeCompare(b.first_name)
        );
        // console.log(data.data);

        // setTableData(data.data);
        setTableData(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(true)
        setLoading(false)
    });
  }, []);

  //   if (error) {
  //     return <div>Somthing went wrong!</div>;
  //   }

  if(loading){
    return<h2>Loading....</h2>
  }

  return (
    <>
      {error ? (
        <h1>Somthing went wrong! {error}</h1>
      ) : (
        <table>
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                {/* <td>{item.id}</td> */}
                <td>{`${item.first_name} ${item.last_name}`}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* {error && <div>Somthing went wrong!</div>}  */}
    </>
  );
}
