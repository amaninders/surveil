import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { displayActivitiesByTime } from "../../../helpers/fetchActivitiesByTime";
import { fetchHeatmapData } from "../../../helpers/fetchHeatmapData";

function UserHeatmap(props) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadActivities();
  }, [props.Id, props.toggle]);

  //get all Activities for a user
  let allActivities = [];
  const loadActivities = async () => {
    allActivities = await axios.get(
      `http://localhost:8000/api/users/${props.Id.id}/activity`,
      {
        withCredentials: true,
      }
    );
    setActivities(allActivities.data.reverse());
  };

  const activitiesByTime = displayActivitiesByTime(
    activities,
    props.toggle.btnradio
  );

  //add week date and today time in activities array
  for (const activity of activitiesByTime) {
    const time = new Date(activity.start_time);
    activity.week = time.toISOString().slice(0, 10);
    activity.today = time.getHours() + ":" + time.getMinutes();
  }

  const { time, scores, day } = fetchHeatmapData(
    activities,
    props.toggle.btnradio
  );
  console.log(time, day, scores);

  const getOption = () => ({
    tooltip: {
      position: "top",
    },
    grid: {
      height: "70%",
      top: "center",
    },
    xAxis: {
      type: "category",
      data: time,
      splitArea: {
        show: true,
      },
    },
    yAxis: {
      type: "category",
      data: day,
      splitArea: {
        show: true,
      },
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: "vertical",
      left: "92%",
      top: "center",
			inRange: {
				color: ['lightcoral', '#fff', '#95d18a', '#60b051','#47a137', '#247816', '#0d5701']
		}
    },
    series: [
      {
        name: "Compliance Score",
        type: "heatmap",
        data: scores,
        label: {
          show: true,
        },
				cellSize: ['auto', 25],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });

  return (
    <div className="card">
      <div className="card-body">
        <ReactEcharts option={getOption()} style={{ height: 400 }} />
        <button className="btn btn-outline-success" type="button" onClick={() => window.location.reload(false)}>
          {" "}
          <i className="fas fa-redo"></i>{" "}
        </button>
      </div>
    </div>
  );
}

export default UserHeatmap;
