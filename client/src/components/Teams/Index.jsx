import React from 'react'
import ItemSelector from '../ItemSelector'
import TeamStats from '../Stats/Teams/TeamStats'
import TeamTimeBySite from '../Stats/Teams/TeamTimeBySite'
import TeamUserList from '../Stats/Teams/TeamUserList'


function Teams() {
	
	return (
		<>
			<div className="container">
				<div className="row data--item">
					<ItemSelector item={"team"} />
			  </div>
			</div>
			<div className="container">
			  <div className="row data--item">
					<TeamStats />
			  </div>
			  <div className="row data--item">
			      <div className="col-xs-12">
							<TeamTimeBySite />
						</div>
			  </div>
				<div className="row data--item">
			      <div className="col-xs-12">
							<h3>All Users</h3>
							<TeamUserList/ >
						</div>
			  </div>
			</div>
		</>
	)
}

export default Teams
