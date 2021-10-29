import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navigator(props) {

	const menuItems = props.menu

	const navigationItems =  menuItems.map(item => <NavigationItem name={item.name} to={item.to} />)

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
			<NavLink to={props.to} activeClassName="navigation--active" className="btn btn-light shadow navigation--items">{props.name} </NavLink>
		</div>
	)	
}


