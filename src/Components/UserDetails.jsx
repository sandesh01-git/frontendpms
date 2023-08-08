import React, { useState, useEffect } from "react";
import "../Components/Form.css";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const [editUser, setEditUser] = useState(null);

  const ttyle = {
    width: "100%",
  };

  useEffect(() => {
    const usersString = localStorage.getItem("users");
    const existingUsers = usersString ? JSON.parse(usersString) : [];
    setUsers(existingUsers);
  }, []);

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    setNewUser({ email: user.email, password: user.password });
  };

  const handleSaveUser = () => {
    if (editUser) {
      // Edit existing user
      const updatedUsers = users.map((user) =>
        user.email === editUser.email ? { ...user, ...newUser } : user
      );
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } else {
      // Add new user
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    setNewUser({ email: "", password: "" });
    setEditUser(null);
  };

  return (
    <section id="home" style={{ padding: "1rem" }}>
      <div className="users-list">
        <h2 className="text-center fw-bolder">Registered Users</h2>
        <table style={ttyle} className="table table-hover">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.email)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row">New</th>
              <td>
                <input
                  type="text"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </td>
              <td>
                <button onClick={handleSaveUser}>
                  {editUser ? "Save" : "Add"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserDetails;
