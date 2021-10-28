import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";

function TimeShare() {
  const [allSites, setAllSites] = useState([]);

  useEffect(() => {
    loadAllSites();
  }, []);

  //get all sites visited by users and time spent
  const loadAllSites = async () => {
    const allSites = await axios.get("http://localhost:8000/api/allsites", {
      withCredentials: true,
    });
    setAllSites(allSites.data);
  };

  const dataNames = allSites.map((site) => site.name);

  const getOption = () => ({
    title: {
      text: "Time Share",
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: dataNames,
    },
    series: [
      {
        name: "Time Share",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: allSites,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });

  return (
    <div className="col-md-4 data--item">
      <div className="card">
        <ReactEcharts option={getOption()} style={{ height: 300 }} />
      </div>
    </div>
  );
}

export default TimeShare;
