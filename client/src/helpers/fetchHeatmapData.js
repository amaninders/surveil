export function fetchHeatmapData(activities, time) {
  console.log("Act", activities);
  if (time === "Today") {
    const dataArray = [];
    for (let i = 0; i < 25; i++) {
      dataArray[i] = { time: i, count: 0, compliance: 0, score: 0 };
    }

    for (let activity of activities) {
      const time = parseInt(activity.today);
      for (let item of dataArray) {
        if (item.time === time) {
          item.count += 1;
          if (activity.is_compliant) {
            item.compliance += 1;
          }
        }
      }
    }

    for (let item of dataArray) {
      item.count === 0
        ? (item.score = 0)
        : (item.score = ((item.compliance / item.count) * 100).toFixed(2));
    }

    const time = dataArray.map((item) => item.time);
    const scores = [];
    for (let i = 0; i < dataArray.length; i++) {
      scores[i] = [i, 0, dataArray[i].score];
    }

    //const scores = dataArray.map(item => item.score);
    const day = [
      `${new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        new Date()
      )}`,
    ];

    return { time, scores, day };
  } else if (time === "Week") {
    const dataArray = [];
    for (let i = 0; i < 25; i++) {
      dataArray[i] = { day: null, time: i, count: 0, compliance: 0, score: 0 };
    }

    for (let activity of activities) {
      const time = parseInt(activity.today);
      const dayNumber = new Date(activity.start_time).getDay();
      for (let item of dataArray) {
        if (item.time === time) {
          item.count += 1;
          item.day = dayNumber;
          if (activity.is_compliant) {
            item.compliance += 1;
          }
        }
      }
    }
    for (let item of dataArray) {
      item.count === 0
        ? (item.score = 0)
        : (item.score = ((item.compliance / item.count) * 100).toFixed(2));
    }

    const day = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const time = dataArray.map((item) => item.time);
    const scores = [];
    for (let i = 0; i < dataArray.length; i++) {
      scores[i] = [i, dataArray[i].day, dataArray[i].score];
    }
    return { time, scores, day };
  } else if (time === "Month") {
    const day = [
      `${new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        new Date()
      )}`,
    ]; //actually month
    const monthNumber = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const daysInMonth = new Date(year, monthNumber, 0).getDate();

    const dataArray = [];
    for (let i = 0; i < daysInMonth; i++) {
      dataArray[i] = { time: i, count: 0, compliance: 0, score: 0 }; //time here is day number like day 1 , day 2 of month
    }

    for (let activity of activities) {
      //const time = parseInt(activity.today);
      const dayNumber = new Date(activity.start_time).getDay();
      for (let item of dataArray) {
        if (item.time === dayNumber) {
          item.count += 1;
          if (activity.is_compliant) {
            item.compliance += 1;
          }
        }
      }
    }

    for (let item of dataArray) {
      item.count === 0
        ? (item.score = 0)
        : (item.score = ((item.compliance / item.count) * 100).toFixed(2));
    }

    const time = dataArray.map((item) => item.time + 1);
    const scores = [];
    for (let i = 0; i < dataArray.length; i++) {
      scores[i] = [i + 1, 0, dataArray[i].score];
    }

    return { time, scores, day };
  } else if (time === "All") {
    const dataArray = [];
    for (let i = 0; i < 32; i++) {
      dataArray[i] = {
        month: null,
        time: i,
        count: 0,
        compliance: 0,
        score: 0,
      }; //time == days number
    }

    for (let activity of activities) {
      const day = new Date(activity.start_time).getDay();
      const monthNumber = new Date(activity.start_time).getMonth();
      for (let item of dataArray) {
        if (item.time === day) {
          item.count += 1;
          item.month = monthNumber;
          if (activity.is_compliant) {
            item.compliance += 1;
          }
        }
      }
    }

    for (let item of dataArray) {
      item.count === 0
        ? (item.score = 0)
        : (item.score = ((item.compliance / item.count) * 100).toFixed(2));
    }

    const day = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const time = dataArray.map((item) => item.time + 1);
    const scores = [];
    for (let i = 0; i < dataArray.length; i++) {
      scores[i] = [i, dataArray[i].month, dataArray[i].score];
    }
    return { time, scores, day };
  }
}
