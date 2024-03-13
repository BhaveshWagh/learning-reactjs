import { useEffect, useState } from "react";

const userData = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "Arti" },
  { name: "rahul" },
];

const Checkbox = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <h3>Select Users</h3>
        <div>
          <input
            type="checkbox"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label>All Select</label>
        </div>
        {users.map((user, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label>{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Checkbox;
