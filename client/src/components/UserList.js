import React from "react";
import { Table, ProgressBar } from "react-bootstrap";

const users = [
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
];

//displays all the Users
export default function UserList(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Team</th>
            <th>Manager</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.team}</td>
              <td>{user.manager}</td>
              <td>
                <div>
                  <ProgressBar
                    label={`${user.progress_score}%`}
                    now={user.progress_score}
                  />
                </div>
              </td>
              <td>
                <div>
                  <img src="images/edit.jpeg" alt="Edit" />
                  <img src="images/delete.jpeg" alt="Delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
