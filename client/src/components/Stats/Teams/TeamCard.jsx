import React from 'react'

function TeamCard() {
	return (
		<div className="col-sm-4">
			<div className="card text-center">
			  <div className="card-body">
					
					<p className="card-text">Select your team</p>				
					
					<select className="form-select" aria-label="Default select example">
					  <option value="1" selected>Support</option>
					  <option value="2">Sales</option>
					  <option value="3">Finance</option>
					</select>
					<br />
					<p className="card-text">Select a date range below</p>				
		
					<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
						<input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
						<label className="btn btn-outline-dark" for="btnradio1">Today</label>

						<input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
						<label className="btn btn-outline-dark" for="btnradio2">Week</label>

						<input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
						<label className="btn btn-outline-dark" for="btnradio3">Month</label>
					</div>
				  	
				</div>
			</div>
		</div>
	)
}

export default TeamCard
