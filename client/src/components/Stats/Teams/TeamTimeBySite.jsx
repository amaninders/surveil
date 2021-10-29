import React from 'react'
import ReactEcharts from 'echarts-for-react';

// in production fetch this data from server
const graphData = {
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value'
	},
	series: [{ 
		data: [820, 932, 901, 934, 1290, 1330, 1320],
		type: 'line'
	}]
}

function TeamTimeBySite() {
	return (
		<div className="card">
		  <div className="card-body">
				<h3>Time by site</h3>
				<ReactEcharts option={graphData} />
				<button className="btn btn-outline-success" type="button"> <i className="fas fa-redo"></i> </button>	
		  </div>
		</div>
	)
}

export default TeamTimeBySite
