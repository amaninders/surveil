import React from 'react'
import TimeShare from '../Stats/General/TimeShare'
import TopSites from '../Stats/General/TopSites'

function OverallSites() {
	return (
		<div className="container">
			<div className="row data--item">
				<TopSites />
				<TimeShare />
			</div>
		</div>
	)
}

export default OverallSites
