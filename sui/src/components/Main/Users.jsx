import React from 'react'
import UserItem from './UserItem'

function Users() {
	const users = [
		{name:'Aman', role: 'Student', status: 'Active'},
		{name:'Aman', role: 'Student', status: 'Active'},
		{name:'Aman', role: 'Student', status: 'Active'},
		{name:'Aman', role: 'Student', status: 'Active'},
		{name:'Aman', role: 'Student', status: 'Active'},
		{name:'Aman', role: 'Student', status: 'Active'},
		{name:'Aman', role: 'Student', status: 'Active'},
		{name:'Aman', role: 'Student', status: 'Active'},
		{name:'Aman', role: 'Student', status: 'Active'}
	]

	const userHTML = users.map((user, index) => 
	<UserItem 
		key={index}
		{...user}
	/>
	)

	return (
		<ul>
			{ userHTML}
		</ul>
	)
}

export default Users
