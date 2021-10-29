import React from 'react'
import Navigator from '../Navigator'

function Admin() {

	const menu = ['create team', 'create user', 'create activity profile']

	return (
		<div>
			<Navigator menu={menu} />
	  </div>
	)
}

export default Admin
