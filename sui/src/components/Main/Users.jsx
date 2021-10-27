import { useEffect, useState } from "react";
import axios from "axios";

import UsersTableData from "./Users/UsersTableData";
import UsersNavbar from "./Users/UsersNavbar";
import CreateUser from "./Users/CreateUser";

import "./Users.css";


export default function Users() {

  const [users, setUsers] = useState([]);
  const [view, setView] = useState("Users");

  const loadUsers = async () => {
    const usersResult = await axios.get("http://localhost:8000/api/users", { withCredentials: true });
    console.log(usersResult.data);
    setUsers(usersResult.data);
  };

  //get all users
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="users-container">
      <UsersNavbar setView={setView}/>
      {view === "Users" && <UsersTableData users={users} />}
      {view === "addUser" && (
        <CreateUser setView={setView} setUsers={setUsers} users={users} />
      )}
    </div>
  );
}
