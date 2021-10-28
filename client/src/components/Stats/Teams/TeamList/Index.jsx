import React from 'react'
import TeamBody from './TeamBody'
import TeamHeader from './TeamHeader'

function TeamList() {
	return (
		<div class="table-responsive row--item">
			<table class="table table-hover align-middle">
				<TeamHeader />
				<TeamBody />
			</table>
		</div>
	)
}

export default TeamList
