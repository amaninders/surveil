/*
/
/ renders the main header for the app
/ => add login and auth check
/
*/

import React from 'react'


function Header(props) {
	return (
	    <nav className="navbar navbar-expand-lg navbar--custom">
				<div className="container-fluid">
					<a className="navbar-brand" href="/"><img src="images/logo/vector/default-monochrome.svg" alt="brand logo" style={{width:"120px"}}/></a>
					<button 
						className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
						{!props.token && <button className="btn btn-light" style={{marginRight:"10px"}}>Register</button>}
						{ props.token && <button className="btn btn-light" style={{marginRight:"10px"}}>Logout</button>}						
					</div>
				</div>
			</nav>
	)
}

export default Header
