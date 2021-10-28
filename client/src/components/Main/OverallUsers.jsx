import React from 'react'
import UserCard from '../Stats/Users/UserCard'

function OverallUsers() {
	return (
		<div class="container">
			<div class="row data--item">
				<h3>Top Users</h3>
				<UserCard />
				<UserCard />
				<UserCard />
			</div>
		</div>
	)
}

export default OverallUsers
