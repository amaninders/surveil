/*
/
/ This is the main page for the app
/ It renders one of the main, teams, users or admin page
/	render is controlled by the router
/ fetch data for each component within its scope
/
/	NOTE: don't add any components directly to the app function
/
*/


import './App.css';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Main from './components/Main/Index';
import Teams from './components/Teams/Index';
import Users from './components/Users/Index';
// import Landing from './components/Landing';

import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import { useState } from 'react';

function App() {

	const [view, setView] = useState();
	const [Id, setId] = useState({
    id: null,
  });

	const menu = [
		{	name:'home', to: '/main'},
		{	name:'teams', to: '/teams'},
		{ name:'users', to: '/users'}
	]

  return (
		<Router>

	    <div className="App">
				<Header />
				{/* <Landing /> */}
				<main className="container py-5">
					<Navigator menu={menu} />
					<hr className="my-5" />
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
	        <Switch>
	          <Route path="/Teams">
	            <Teams view={view} setView={setView} Id={Id} setId={setId}/>
	          </Route>
	          <Route path="/users">
	            <Users view={view} setView={setView} Id={Id} setId={setId}/>
	          </Route>
	          <Route path="/main">
	            <Main />
	          </Route>
						<Route path="/">
	            <Main />
	          </Route>
	        </Switch>
				</main>
	    </div>

		</Router>
  );
}

export default App;
