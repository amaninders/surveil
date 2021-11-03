import React from "react";
import "./Index.css";

function OrgProfile(props) {
  return (
    <div className="org-profile-card one">
      <div className="top">
        <div className="wrapper">
          <div className="mynav">
            <a href="/">
              <span className="lnr lnr-cog"></span>
            </a>
          </div>
          <h1 className="heading">Skynet</h1>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <ul className="org-numbers">
            <li className="d-flex active justify-content-between align-middle">
              <span>Teams</span>
              <span>{props.teams.length}</span>
            </li>
            <li className="d-flex active justify-content-between">
              <span>Users</span>
              <span>{props.users.length}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrgProfile;
