import React from 'react'
import TeamStats from '../Stats/Teams/TeamStats'
import TeamSelectors from './TeamSelectors'

function Teams() {
	return (
		<>
			<div className="container">
				<div className="row data--item">
					<TeamSelectors />
			  </div>
			</div>
			<div className="container">
			  <div className="row data--item">
					<TeamStats />
			  </div>
			  <div className="row">
			      <div className="col-xs-12"></div>
			  </div>
			</div>
		</>
	)
}

export default Teams
