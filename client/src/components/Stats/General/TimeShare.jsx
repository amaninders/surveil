import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";
import convert from  'convert-seconds';

function TimeShare() {

	const [allSites, setAllSites] = useState([]);

  useEffect(() => {
    loadAllSites();
  }, []);

  //get all sites visited by users and time spent
  const loadAllSites = async () => {
    const allSites = await axios.get("http://localhost:8000/api/allsites", {  withCredentials: true  });
    setAllSites(allSites.data);
  };

  const totalTime = allSites.map(site => site.value).reduce((prev, curr) => prev + curr, 0);

	const source = allSites.map(site => {
		return [
			Math.round((site.value/totalTime) * 100),
			site.value ? convert(site.value).hours : 0,
			(site.name.substr(0, 20) + "\u2026")
		]
	})

  // const dataNames = combinedSitesData.map((site) => site.name);
  const getOption = () => ({
    dataset: {
			source: [
				['score', 'time', 'product'],
				...source
			]
		},
		grid: { containLabel: false, left: '15%' },
		xAxis: { name: 'time spent in hours' },
		yAxis: { name: 'websites visited', type: 'category' },
		series: [
			{
				color: 'green',
				type: 'bar',
				barMinWidth:5,
				encode: {
					// Map the "amount" column to X axis.
					x: 'time',
					// Map the "product" column to Y axis
					y: 'product'
				}
			}
		]
  });

  return (
    <div className="col-md-12 data--item">
      <div className="card">
        <ReactEcharts option={getOption()} style={{ height: 450 }} />
      </div>
    </div>
  );
}

export default TimeShare;
