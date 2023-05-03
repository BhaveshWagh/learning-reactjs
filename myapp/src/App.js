import "./App.css";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory</h1>
        <Employee firstName="Mayur"  lastName="Patil"/>
        <Employee firstName="Dinesh" lastName="Ishi"/>
        <Employee firstName="Moreshwar" lastName="Wagh"/>
        <Employee firstName="Kapil" lastName="Wagh"/>
      </header>
    </div>
  );
}

export default App;
