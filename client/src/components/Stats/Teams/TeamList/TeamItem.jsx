import React from 'react'

function TeamItem(props) {
	const progress = `${props.score}%`

	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.users}</td>
			<td>
				<div className="progress" style={{height:'20px'}}>
					<div className="progress-bar" role="progressbar" style={{width:progress}} aria-valuenow={props.score} aria-valuemin="0" aria-valuemax="100">{props.score}%</div>
				</div>
			</td>
		</tr>
	)
}

export default TeamItem
