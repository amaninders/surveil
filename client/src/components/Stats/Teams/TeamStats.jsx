import React from 'react'
import TeamCard from './TeamCard'

function TeamStats() {

	return (
		<div className="container">
    <div className="row data--item">
        <div className="col-sm-4">
					<TeamCard title={"users"} value={36} icon={"fas fa-users"}/>
				</div>
        <div className="col-sm-4">
					<TeamCard title={"hours"} value={190} icon={"fas fa-clock"}/>
				</div>
        <div className="col-sm-4">
					<TeamCard title={"sites"} value={20} icon={"fas fa-wifi"}/>
				</div>
    </div>
</div>

	)
}

export default TeamStats
