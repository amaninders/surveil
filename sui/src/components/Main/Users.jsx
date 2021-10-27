import { useEffect, useState } from "react";
import axios from "axios";

import UsersTableData from "./Users/UsersTableData";
import UsersHeader from "./Users/UsersHeader";
import CreateUser from "./Users/CreateUser";

import "./Users.css";
import UsersNavbar from "./Users/UsersNavbar";

export default function Users() {
  const usersArray = [
    {
      id: 1,
      first_name: "Peter",
      last_name: "Parkar",
      team: "Sales",
      manager: "Bob Smith",
      progress_score: 60,
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      team: "Finance",
      manager: "Mike Smith",
      progress_score: 90,
    },
    {
      id: 3,
      first_name: "David",
      last_name: "David",
      team: "Sales",
      manager: "James Jones",
      progress_score: 40,
    },
    {
      id: 4,
      first_name: "Peter",
      last_name: "Parkar",
      team: "Sales",
      manager: "Bob Smith",
      progress_score: 60,
    },
    {
      id: 5,
      first_name: "John",
      last_name: "Doe",
      team: "Finance",
      manager: "Mike Smith",
      progress_score: 90,
    },
    {
      id: 6,
      first_name: "David",
      last_name: "David",
      team: "Sales",
      manager: "James Jones",
      progress_score: 40,
    },
    {
      id: 7,
      first_name: "Peter",
      last_name: "Parkar",
      team: "Sales",
      manager: "Bob Smith",
      progress_score: 60,
    },
    {
      id: 8,
      first_name: "John",
      last_name: "Doe",
      team: "Finance",
      manager: "Mike Smith",
      progress_score: 90,
    },
    {
      id: 9,
      first_name: "David",
      last_name: "David",
      team: "Sales",
      manager: "James Jones",
      progress_score: 40,
    },
    {
      id: 10,
      first_name: "Peter",
      last_name: "Parkar",
      team: "Sales",
      manager: "Bob Smith",
      progress_score: 30,
    },
    {
      id: 11,
      first_name: "John",
      last_name: "Doe",
      team: "Finance",
      manager: "Mike Smith",
      progress_score: 60,
    },
    {
      id: 12,
      first_name: "David",
      last_name: "David",
      team: "Sales",
      manager: "James Jones",
      progress_score: 80,
    },
  ];

  const [users, setUsers] = useState([]);
  const [view, setView] = useState("Users");

  //get all users
  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const usersResult = await axios.get("http://localhost:8000/users");
  //   setUsers(usersResult.data);
  // };

  return (
    <div className="users-container">
      <UsersHeader setView={setView} />
      <UsersNavbar />
      {view === "Users" && <UsersTableData users={users} />}
      {view === "addUser" && (
        <CreateUser setView={setView} setUsers={setUsers} users={users} />
      )}
    </div>
  );
}
