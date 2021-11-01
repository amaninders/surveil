import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { teamTimeBySite } from "../../../helpers/fetchTeamTimeBySite";

// in production fetch this data from server

function TeamTimeBySite(props) {
  const [teamMembers, setTeamMembers] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadTeamMembers();
    loadActivities();
  }, [props.Id]);

  const loadTeamMembers = async () => {
    const teamMembers = await axios.get(
      `http://localhost:8000/api/teams/${props.Id.id}`,
      {
        withCredentials: true,
      }
    );
    setTeamMembers(teamMembers.data.members);
  };

  const loadActivities = async () => {
    const allActivities = await axios.get(
      `http://localhost:8000/api/activity`,
      {
        withCredentials: true,
      }
    );
    setActivities(allActivities.data);
  };

  const Result = teamTimeBySite(teamMembers, activities);
  const xAxisData = Object.keys(Result);
  const yAxisData = Object.values(Result);

  return (
    <div className="card">
      <div className="card-body">
        <h3>Visits on each Site</h3>
        <ReactEcharts
          option={{
            xAxis: {
              type: "category",
              data: xAxisData,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                data: yAxisData,
                type: "bar",
              },
            ],
          }}
        />
        <button className="btn btn-outline-success" type="button">
          {" "}
          <i className="fas fa-redo"></i>{" "}
        </button>
      </div>
    </div>
  );
}

export default TeamTimeBySite;
