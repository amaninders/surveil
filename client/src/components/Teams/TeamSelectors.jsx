import React from 'react'

function TeamSelectors() {
	return (
		<form className="row row-cols-lg-auto g-3 align-items-center">
			<div className="col-12">
			  <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
			  <select className="form-select" id="inlineFormSelectPref">
			    <option selected>Select a team...</option>
			    <option value="1">One</option>
			    <option value="2">Two</option>
			    <option value="3">Three</option>
			  </select>
			</div>
			<div className="col-12">
				<div class="btn-group" role="group" aria-label="Basic radio toggle button group" style={{width:'100%'}}>
				  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
				  <label class="btn btn-outline-dark" for="btnradio1">Today</label>

				  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
				  <label class="btn btn-outline-dark" for="btnradio2">Week</label>

				  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
				  <label class="btn btn-outline-dark" for="btnradio3">Month</label>
				</div>
			</div>

			
			<div className="col-12" style={{textAlign:'Center'}}>
			  <button type="submit" className="btn btn-dark">Submit</button>
			</div>
		</form>
	)
}

export default TeamSelectors
