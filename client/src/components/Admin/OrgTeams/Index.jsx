import React from 'react'

function OrgTeams(props) {
	return (
		<div class="card">
		  <div class="d-flex card-header justify-content-between">
				<h5 className="text-start org-list-title">Teams</h5>
				<button className="btn btn-secondary btn-sm">Add Team</button>
		  </div>
		  <ul class="list-group list-group-numbered">
			{props.teams.map(team => {
				const count = props.users.filter(item => item.team_id === team.id)
				return (
					<li class="list-group-item d-flex justify-content-between align-items-start">
						<div class="ms-2 me-auto">
							<div class="fw-bold">{team.name}</div>
						</div>
						<span class="btn btn-outline-success btn-sm rounded-pill disabled">{count.length} users</span>
					</li>
				)})}
			</ul>
		</div>
	)
}

export default OrgTeams
