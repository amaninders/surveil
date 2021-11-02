import React from 'react'

function UserCard(props) {
	const progress = `${props.score}%`

	return (
		<div className="col-md-4 data--item">
			<div className="card p-3 mb-2 user--card">
				<div className="d-flex justify-content-between">
					<div className="d-flex flex-row align-items-center">
						<div className="icon"> <i className="fas fa-user-circle"></i> </div>
						<div className="ms-2 c-details"><h6 className="mb-0">{props.name}</h6> <span>{props.team}</span>
						</div>
					</div>
				</div>
				<div className="mt-5">													
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={{width:progress}} aria-valuenow={props.score} aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<div className="mt-3"> <span className="text1">{ props.score }% <span className="text2">Compliance</span></span> </div>
				</div>
			</div>
		</div>
	)
}

export default UserCard
