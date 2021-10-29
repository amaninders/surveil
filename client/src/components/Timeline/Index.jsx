import "./Timeline.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TimelineItem from "./TimelineItem";

function Timeline(props) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadActivities();
  }, [props.Id]);

  //get all Activities for a user
  const loadActivities = async () => {
    const allActivities = await axios.get(`http://localhost:8000/api/users/${props.Id.id}/activity`, {
      withCredentials: true,
    });
    setActivities(allActivities.data);
  };

  const formatTime = (isoDate) =>{
    const time = new Date(isoDate);
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return  date.toDateString();
  }


  return (
    <div className="container">
      <div className="row data--item">
        <div className="col-md-10">
          <ul className="timeline">
            {activities.map(activity => <TimelineItem time={`${formatDate(activity.start_time)}
            ${formatTime(activity.start_time)}`}
              appImage="favicon.ico"
              name={activity.name}
              title={activity.title} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
