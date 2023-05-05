import "./App.css";
// import Main from "./components/Main";
// import Employee from "./components/Employee";

// Nested Object Desctruring and alies names 
const employee = {
  id: "ABC",
  name: "Anthony",
  salary: "$20 ",
  address: {
    salary: "$100",
    street: "210 Washington Street",
    country: "CANADA",
    province: "Ontario",
    zones: {
      plantZone: "8A",
      alienZone: "27",
    },
  },
};

function App() {
  const { name, id, salary: empSalary, address: {street,country,addressSalary,province,zones:{plantZone,alienZone} } } = employee;
  // const { street, salary: addressSalary, country, province, zones } = address;
  // const { plantZone, alienZone } = zones;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Namaskar React 🙏</h1>
        <h3>{name}</h3>
        <h3>{id}</h3>
        <h3> empSalary : {empSalary}</h3>
        <h3>addressSalary : {addressSalary}</h3>
        <h3>
          {/*{address.zones.palntZone} {address.street} {address.country} {address.province}*/}
          {`The Employee Address: ${street}, ${country}, ${province}`}
        </h3>
        <h2>{`Plant Zone : ${plantZone}, Alien Zone:${alienZone}`}</h2>
      </header>
    </div>
  );
}

export default App;
