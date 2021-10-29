import React from 'react'

function Navigator() {
	return (
			<div className="container">
				<div className="row text-center">
						<div className="col-sm-4">
							<a href="/" className="btn btn-light shadow navigation--items" role="button" data-bs-toggle="button">home</a>
						</div>

						<div className="col-sm-4">
							<a href="/" className="btn btn-light shadow navigation--items" role="button" data-bs-toggle="button">team</a>
						</div>
						
						<div className="col-sm-4">
							<a href="/" className="btn btn-light shadow navigation--items" role="button" data-bs-toggle="button">user</a>
						</div>
						
				</div>
			</div>
	)
}

export default Navigator
