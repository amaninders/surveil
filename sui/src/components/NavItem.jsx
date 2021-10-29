import React from 'react'

function NavItem(props) {
	return (
		<li className={props.class} onClick={(e) => props.switchTo(e, props.name)} aria-current={props.ariaCurrent}>
      <a className="nav-link" href="/">
        <span data-feather={props.feather}></span>
				<i className="fas fa-layer-group"></i>
        {props.name}
      </a>
    </li>
	)
}

export default NavItem
