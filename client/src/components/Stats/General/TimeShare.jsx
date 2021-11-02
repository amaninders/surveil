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

  let  combinedSitesData = [];
  if(allSites.length > 5) {
    const topSites = allSites.slice(0, 4);
    const restOfTheSites = allSites.slice(4);
    const other = [{name:"Others", value: 0}];

    for(const site of restOfTheSites) {
      other[0].value += Number(site.value)
    }
    
    combinedSitesData = topSites.concat(other);
  } else {
    combinedSitesData = [...allSites];
  }

  const dataNames = combinedSitesData.map((site) => site.name);

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
        data: combinedSitesData,
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
