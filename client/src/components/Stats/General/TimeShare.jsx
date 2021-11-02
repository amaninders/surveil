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
    const allSites = await axios.get("http://localhost:8000/api/allsites", {  withCredentials: true  });
    setAllSites(allSites.data);
  };

  const totalTime = allSites.map(site => site.value).reduce((prev, curr) => prev + curr, 0);
	
	console.log(totalTime);

	const source = allSites.map(site => {
		return [
			Math.round((site.value/totalTime) * 100),
			site.value ? site.value : 0,
			site.name
		]
	})

	console.log(source)

  // const dataNames = combinedSitesData.map((site) => site.name);
  const getOption = () => ({
    dataset: {
			source: [
				['score', 'time', 'product'],
				...source
			]
		},
		grid: { containLabel: false, left: '15%' },
		xAxis: { name: 'time' },
		yAxis: { type: 'category' },
		visualMap: {
			orient: 'horizontal',
			left: 'center',
			min: 0,
			max: 50,
			text: ['High Score', 'Low Score'],
			// Map the score column to color
			dimension: 0,
			inRange: {
				color: ['#65B581', '#FFCE34', '#FD665F']
			}
		},
		series: [
			{
				type: 'bar',
				barMinWidth:10,
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
        <ReactEcharts option={getOption()} style={{ height: 300 }} />
      </div>
    </div>
  );
}

export default TimeShare;
