export function displayActivitiesByTime(activities, time) {
  const current = new Date();
  
  if (time === "All") {
    return activities;
  } else if (time === "Month") {
    const lastMonthActivities = [];
    const priorMonth = new Date(new Date().setDate(current.getDate() - 30));

    for (let i = 0; i < activities.length; i++) {
      const startTimeDate = new Date(activities[i].start_time);
      if (startTimeDate > priorMonth && startTimeDate < current) {
        lastMonthActivities.push(activities[i]);
      }
    }
    return lastMonthActivities;
  } else if (time === "Week") {
    const lastWeekActivities = [];
    const priorWeek = new Date(new Date().setDate(current.getDate() - 7));

    for (let i = 0; i < activities.length; i++) {
      const startTimeDate = new Date(activities[i].start_time);
      if (startTimeDate > priorWeek && startTimeDate < current) {
        lastWeekActivities.push(activities[i]);
      }
    }
    return lastWeekActivities;
  } else if (time === "Today") {
    const todaysActivities = [];
    const priorDay = new Date(new Date().setDate(current.getDate() - 1));

    for (let i = 0; i < activities.length; i++) {
      const startTimeDate = new Date(activities[i].start_time);
      if (startTimeDate > priorDay) {
        todaysActivities.push(activities[i]);
      }
    }
    return todaysActivities;
  }
}
