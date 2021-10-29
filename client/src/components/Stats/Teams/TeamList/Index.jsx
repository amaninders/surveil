import React from 'react'
import TeamBody from './TeamBody'
import TeamHeader from './TeamHeader'

function TeamList() {
	return (
		<div className="table-responsive row--item">
			<table className="table table-hover align-middle">
				<TeamHeader />
				<TeamBody />
			</table>
		</div>
	)
}

export default TeamList
