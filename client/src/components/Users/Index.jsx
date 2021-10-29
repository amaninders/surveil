import React, { useEffect, useState } from "react";
import ItemSelector from "../ItemSelector";
import UserHeatmap from "../Stats/Users/UserHeatmap";
import Timeline from "../Timeline/Index";
import axios from "axios";

function Users(props) {
  props.setView("users");
	const [Id, setId] = useState({
    id: 1,
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  //get all Users
  const loadUsers = async () => {
    const allUsers = await axios.get("http://localhost:8000/api/users", {
      withCredentials: true,
    });
    setUsers(allUsers.data);
  };

  return (
    <>
      <div className="container">
        <div className="row data--item">
          <ItemSelector
            item={users}
            view={props.view}
            Id={Id}
            setId={setId}
          />
        </div>
      </div>
      <div className="container">
        <div className="row data--item">
          <h3>Compliance Heatmap</h3>
          <div className="col-sm-12">
            <UserHeatmap />
          </div>
        </div>
        <div className="row data--item">
          <h3>Activity Stream</h3>
          <div className="col-sm-12 data--item" style={{ paddingTop: "20px" }}>
            <Timeline Id={Id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
