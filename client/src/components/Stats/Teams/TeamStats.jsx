import React from 'react'
import TeamCard from './TeamCard'

function TeamStats() {

	return (
		<div class="container">
    <div class="row data--item">
        <div class="col-sm-4">
					<TeamCard title={"users"} value={36} icon={"fas fa-users"}/>
				</div>
        <div class="col-sm-4">
					<TeamCard title={"hours"} value={190} icon={"fas fa-clock"}/>
				</div>
        <div class="col-sm-4">
					<TeamCard title={"sites"} value={20} icon={"fas fa-wifi"}/>
				</div>
    </div>
</div>

	)
}

export default TeamStats
