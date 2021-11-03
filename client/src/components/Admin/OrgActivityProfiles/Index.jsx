import React from 'react'

function OrgActivityProfiles(props) {
	return (
		<div class="card">
		  <div class="d-flex card-header justify-content-between">
				<h5 className="text-start org-list-title">Work Profiles</h5>
				<button className="btn btn-secondary btn-sm">Add Work Profile</button>
		  </div>
		  <ul class="list-group list-group-numbered">
			{props.activityProfiles.map(activity => {
				const count = props.users.filter(item => item.activity_profile_id === activity.id)
				return(
					<li class="list-group-item d-flex justify-content-between align-items-start">
				    <div class="ms-2 me-auto">
				      <div class="fw-bold">{activity.name}</div>
				    </div>
				    <span class="btn btn-outline-success btn-sm rounded-pill disabled">{count.length} users</span>
				  </li>
				)
			})}
			</ul>
		</div>
	)
}

export default OrgActivityProfiles