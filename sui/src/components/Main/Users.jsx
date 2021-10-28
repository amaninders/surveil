import { useEffect, useState } from "react";
import axios from "axios";

import UsersTableData from "./Users/UsersTableData";
import UsersNavbar from "./Users/UsersNavbar";
import CreateUser from "./Users/CreateUser";

import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [view, setView] = useState("Users");

  //get all users
  const loadUsers = async () => {
    const usersResult = await axios.get("http://localhost:8000/api/users", {
      withCredentials: true,
    });
    console.log(usersResult.data);
    setUsers(usersResult.data);
  };

  useEffect(() => {
    loadUsers();
    loadTeams();
  }, []);

  //get all teams
  const loadTeams = async () => {
    const allTeams = await axios.get("http://localhost:8000/api/teams", {
      withCredentials: true,
    });
    setTeams(allTeams.data);
  };

  return (
    <div className="users-container">
      <UsersNavbar setView={setView} />
      {view === "Users" && <UsersTableData users={users} teams={teams} />}
      {view === "addUser" && (
        <CreateUser
          setView={setView}
          setUsers={setUsers}
          users={users}
          teams={teams}
        />
      )}
    </div>
  );
}
