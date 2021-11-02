import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { teamTimeBySite } from "../../../helpers/fetchTeamTimeBySite";
import { displayActivitiesByTime } from "../../../helpers/fetchActivitiesByTime";

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

  const activitiesByTime = displayActivitiesByTime(activities, props.toggle.btnradio)

  const result = teamTimeBySite(teamMembers, activitiesByTime);
  const xAxisData = Object.keys(result);
  const yAxisData = Object.values(result);
  console.log(xAxisData);

  const getOption = () =>({
    xAxis: {
      type: "category",
      axisLabel: { interval: 0, rotate: 30 },
      data: xAxisData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: yAxisData,
        type: "bar",
        itemStyle: {
          color: '#91cc75'
      }
      },
    ],
  })

  return (
    <div className="card">
      <div className="card-body">
        <h3>Visits on each Site</h3>
        <ReactEcharts
          option={getOption()}
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
