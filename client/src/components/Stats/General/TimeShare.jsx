import React from 'react'

function TimeShare() {
	return (
		<div className="col-md-4 data--item">
			<h3>Time Share %</h3>
			<div className="card">
				<div className="card-body">
					<div className="progress">
						<div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
					</div><br/>
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
					</div><br/>
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
					</div><br/>
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
					</div><br/>
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
					</div><br/>
				</div>
			</div>
		</div>
	)
}

export default TimeShare
