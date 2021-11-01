import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import axios from "axios";

function TeamStats(props) {
  const [teamStats, setTeamStats] = useState([]);

  useEffect(() => {
    loadTeamStats();
  }, [props.Id]);

  const loadTeamStats = async () => {
    const teamStats = await axios.get(
      `http://localhost:8000/api/teams/${props.Id.id}`,
      {
        withCredentials: true,
      }
    );
    setTeamStats(teamStats.data);
  };

  return (
    <div className="container">
      <div className="row data--item">
        <div className="col-sm-4">
          <TeamCard
            title={"users"}
            value={teamStats.total_users}
            icon={"fas fa-users"}
          />
        </div>
        <div className="col-sm-4">
          <TeamCard
            title={"hours"}
            value={`${Math.round(teamStats.total_time / 3600000)}`}
            icon={"fas fa-clock"}
          />
        </div>
        <div className="col-sm-4">
          <TeamCard
            title={"sites"}
            value={teamStats.total_sites}
            icon={"fas fa-wifi"}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamStats;
