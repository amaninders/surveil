import React from 'react'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

function getVirtulData(year) {
  year = year || '2017';
  let date = +echarts.number.parseDate(year + '-01-01');
  let end = +echarts.number.parseDate(+year + 1 + '-01-01');
  let dayTime = 3600 * 24 * 1000;
  let data = [];
  for (var time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
      Math.floor(Math.random() * 10000)
    ]);
  }
  return data;
}


// in production fetch this data from server
const graphData = {
  title: {
    top: 30,
    left: 'center',
    text: 'Daily Compliance'
  },
  tooltip: {},
  visualMap: {
    min: 0,
    max: 10000,
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65,
		inRange : {   
			color: ['#d8f2d3', '#95d18a' ] //From smaller to bigger value ->
		}
  },
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: ['auto', 20],
    range: '2016',
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: false }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getVirtulData('2016')
  }
};

function UserHeatmap() {
	return (
		<div className="card">
		<div className="card-body">
			<ReactEcharts option={graphData} />
			<button className="btn btn-outline-success" type="button"> <i class="fas fa-redo"></i> </button>	
		</div>
	</div>
	)
}

export default UserHeatmap