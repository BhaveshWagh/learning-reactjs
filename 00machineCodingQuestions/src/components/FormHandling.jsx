import { useState } from "react";

const FormHandling = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Full Name: ${firstName} ${lastName}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandling;
