import React from 'react'
import './Index.css'

function OrgProfile() {
	return (
		<div className="org-profile-card one">
			<div className="top">
				<div className="wrapper">
					<div className="mynav">
						<a href="/"><span className="lnr lnr-chevron-left"></span></a>
						<a href="/"><span className="lnr lnr-cog"></span></a>
					</div>
					<h1 className="heading">Org Name</h1>
				</div>
			</div>
			<div className="bottom">
				<div className="wrapper">
					<ul className="forecast">
						<a href="/"><span className="lnr lnr-chevron-up go-up "></span></a>
						<li className="d-flex active justify-content-between">
							<span>Teams</span>
							<span>2</span>
						</li>
						<li className="d-flex active justify-content-between">
							<span>Users</span>
							<span>15</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default OrgProfile
