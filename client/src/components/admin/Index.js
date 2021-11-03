import React from 'react'
import Navigator from '../Navigator'
import OrgProfile from './OrgProfile/Index'
import OrgTeams from './OrgTeams/Index'
import OrgUsers from './OrgUsers/Index'

function Admin() {

	return (
		<div>
			<div className="container text-center">
			    <div className="row">
			        <div className="col-sm-3">
								<OrgProfile />
							</div>
			        <div className="col-sm-9">
								<OrgTeams />
							</div>
			        <div className="col-sm-12">
								<OrgUsers />
							</div>
			    </div>
			</div>
	  </div>
	)
}

export default Admin
