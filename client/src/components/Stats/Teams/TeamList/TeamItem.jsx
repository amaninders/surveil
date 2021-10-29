import React from 'react'

function TeamItem() {
	return (
		<tr>
			<td>Support</td>
			<td>10</td>
			<td>
				<div className="progress" style={{height:'20px'}}>
					<div className="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
				</div>
			</td>
			<td className="text-danger"> 18.76% <i className="fa fa-arrow-down"></i></td>
		</tr>
	)
}

export default TeamItem
