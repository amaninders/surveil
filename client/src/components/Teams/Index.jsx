import React from 'react'
import Navigator from '../Navigator'
import TopSites from '../Stats/General/TopSites'
import TeamCard from '../Stats/Teams/TeamCard'

function Teams() {
	return (
		<main className="container py-5">
			<Navigator />
			<hr className="my-5" />
			<div className="container">
			  <div className="row">
						<TeamCard />
						<TopSites />
			  </div>
			  <div className="row">
			      <div className="col-xs-12"></div>
			  </div>
			</div>
		</main>
	)
}

export default Teams
