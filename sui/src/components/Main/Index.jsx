import React from 'react'
import Home from './Home'
import Teams from './Teams'
import Users from './Users'

function Main(props) {
	return (
		<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      {props.view === 'Home' && <Home />}
			{props.view === 'Teams' && <Teams /> }
			{props.view === 'Users' && <Users /> }
    </main>
	)
}

export default Main
