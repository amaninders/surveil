import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navigator() {

	const menuItems = [
    { name: "home", to: "/main" },
    { name: "teams", to: "/teams" },
    { name: "users", to: "/users" },
  ];

	const navigationItems =  menuItems.map((item, index) => <NavigationItem key={index} name={item.name} to={item.to} />)

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


