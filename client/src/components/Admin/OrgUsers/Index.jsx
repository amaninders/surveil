import React from 'react'

function OrgUsers(props) {
	
	return (
		<div class="card">
		  <div class="d-flex card-header justify-content-between">
				<h5 className="text-start org-list-title">Users</h5>
				<button className="btn btn-secondary btn-sm">Add User</button>
		  </div>
		  <ul class="list-group list-group-numbered">
				{props.users.map(user => {
					const team = props.teams.find(item => item.id === user.team_id)
						return(
							<li class="list-group-item d-flex justify-content-between align-items-start">
						    <div class="ms-2 me-auto">
						      <div class="fw-bold">{`${user.first_name} ${user.last_name}`}</div>
						    </div>
						    <span class="btn btn-outline-success btn-sm rounded-pill disabled">{team ? team.name : 'Admin/Manager'}</span>
					  	</li>
						)
				})}
			</ul>
		</div>
	)
}

export default OrgUsers
