import React, { useState, useEffect } from "react";
import OrgProfile from "./OrgProfile/Index";
import OrgTeams from "./OrgTeams/Index";
import OrgUsers from "./OrgUsers/Index";
import OrgActivityProfiles from "./OrgActivityProfiles/Index";
import axios from "axios";

function Admin() {
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [activityProfiles, setActivityProfiles] = useState([]);

  useEffect(() => {
    loadUsers();
    loadTeams();
    loadProfiles();
  }, []);

  //get all users
  const loadUsers = async () => {
    const allUsers = await axios.get("http://localhost:8000/api/users", {
      withCredentials: true,
    });
    setUsers(allUsers.data);
  };

  const loadTeams = async () => {
    const allTeams = await axios.get("http://localhost:8000/api/teams", {
      withCredentials: true,
    });
    setTeams(allTeams.data);
  };
  const loadProfiles = async () => {
    const allProfiles = await axios.get("http://localhost:8000/api/activity_profile", {
      withCredentials: true,
    });
    setActivityProfiles(allProfiles.data);
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <OrgProfile users={users} teams={teams}/>
          </div>
          <div className="col-sm-9">
            <OrgTeams teams={teams} users={users}/>
            <br />
            <OrgUsers users={users} teams={teams}/>
						<br />
            <OrgActivityProfiles activityProfiles={activityProfiles} users={users}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
