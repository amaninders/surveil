import React from 'react'
import TopSites from '../Stats/General/TopSites'
import TeamCard from '../Stats/Teams/TeamCard'
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
						<TeamCard />
						<TopSites />
			  </div>
			  <div className="row">
			      <div className="col-xs-12"></div>
			  </div>
			</div>
		</>
	)
}

export default Teams
