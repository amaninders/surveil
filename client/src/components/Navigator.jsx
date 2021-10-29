import React from 'react'

export default function Navigator(props) {

	const menuItems = props.menu

	const navigationItems =  menuItems.map(item => <NavigationItem name={item} />)

	return (
			<div className="container">
				<div className="row text-center">
					{navigationItems}							
				</div>
			</div>
	)
}


function NavigationItem(props) {
	return (
		<div className="col-sm-4">
			<a href="/" className="btn btn-light shadow navigation--items" role="button" data-bs-toggle="button">{props.name}</a>
		</div>
	)	
}


