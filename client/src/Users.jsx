import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users({ token }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get("http://localhost:8080/api/test/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error retrieving users:", error);
    }
  }

  return (
    <>
      <center>
        <h1>All Users</h1>
      </center>
      <div className="UsersContainer">
        <div className="userTitle">
          <h1 style={{ marginLeft: "-100px" }}>Username</h1>
          <h1 style={{ marginLeft: "-100px" }}>Email</h1>
        </div>
        {users.map((item) => (
          <div className="user" key={item.id}>
            <h1 style={{ fontWeight: "normal" }}>{item.username}</h1>
            <h1 style={{ fontWeight: "normal" }}>{item.email}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
