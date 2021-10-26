import React from "react";

function CreateUser(props) {
  //will go back to users table view
  const cancel = () => {
    props.setNewUser(false);
  };

  const addNewUser = () => {
    alert("User created!");
    props.setNewUser(false);
  };
  return (
    <div>
      <form className="row g-3">
        <div>
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" />
        </div>
        <div>
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" />
        </div>
        <div>
          <label className="form-label">Team</label>
          <select className="form-select">
            <option selected>Select Team</option>
            <option>Finance</option>
            <option>Sales</option>
            <option>Support</option>
          </select>
        </div>
        <div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Manager</label>
          </div>
        </div>
        <div className="col-md-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={addNewUser}
          >
            Create User
          </button>
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
