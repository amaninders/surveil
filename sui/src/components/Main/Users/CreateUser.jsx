import React, { useState } from "react";
import axios from "axios";

function CreateUser(props) {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    team_id: null,
    is_manager: false,
    activityProfile: null,
  });

  //will go back to users table view
  const cancel = () => {
    props.setView("Users");
  };

  //add new user
  const addNewUser = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/users", user, {
      withCredentials: true,
    });
    props.setView("Users");
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setUser({ ...user, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <form className="row g-3 create-user" onSubmit={addNewUser}>
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="first_name"
            value={user.first_name}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="last_name"
            value={user.last_name}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Team</label>
          <select
            className="form-select"
            name="team_id"
            value={user.team_id}
            onChange={onInputChange}
          >
            <option selected>Select Team</option>
            {props.teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Assign Activity </label>
          <select
            className="form-select"
            name="activityProfile"
            value={user.activityProfile}
            onChange={onInputChange}
          >
            <option selected>Select Activity Profile</option>
            <option>Finance Activities</option>
            <option>Sales Activities</option>
            <option>Support Activities</option>
          </select>
        </div>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="is_manager"
              value={user.is_manager}
              defaultChecked={false}
              onChange={handleCheck}
            />
            <label className="form-check-label">Manager</label>
          </div>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary">Create User</button>
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary" onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
