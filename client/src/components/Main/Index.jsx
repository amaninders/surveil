import React from 'react'
import Navigator from '../Navigator'
import OverallSites from './OverallSites'
import OverallTeams from './OverallTeams'
import OverallUsers from './OverallUsers'

function Main() {
	return (
		<main className="container py-5">
			<Navigator />
			<hr class="my-5" />
			<OverallSites />
			<OverallUsers />
			<OverallTeams />
		</main>
	)
}

export default Main
