import { useState } from "react";
import UsersTableData from "./Users/UsersTableData";
import UsersTableHeader from "./Users/UsersTableHeader";

import "./Users.css";
import UsersHeader from "./Users/UsersHeader";
import CreateUser from "./Users/CreateUser";

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

  const [users, setUsers] = useState(usersArray);
  const [newUser, setNewUser] = useState(false);

  return (
    <div className="users-container">
      <UsersHeader setNewUser={setNewUser} />
      {!newUser && (
        <table className="table table-hover">
          <tr>
            <UsersTableHeader users={users} />
          </tr>
          <tbody>
            <UsersTableData users={users} />
          </tbody>
        </table>
      )}
      {newUser && <CreateUser setNewUser={setNewUser} />}
    </div>
  );
}
