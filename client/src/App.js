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

// import css
import "./App.css";

// import compnonents
import Landing   from './components/Landing';
import Header    from "./components/Header";
import Navigator from "./components/Navigator";
import Main 		 from "./components/Main/Index";
import Teams     from "./components/Teams/Index";
import Users     from "./components/Users/Index";

// import hooks
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import useToken from './hooks/useToken';
import Admin from "./components/admin/Index";


// The main App function
function App() {
  
	// token to control the user access and authentication
	const { token, setToken } = useToken();

	// token to set the current view in use
	const [view, setView] 	= useState();

	// render the login page if the user is not logged in (a.k.a token cannot be found)
	if(!token) {
    return (
			<>
				<Header token={token}/>
				<Landing setToken={setToken} />
			</>
		)
  }

  return (
    <Router>
      <div className="App">
        <Header token={token}/>
        {/* <Landing /> */}
        <main className="container py-5">
          <Navigator />
          <hr className="my-5" />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Teams">
              <Teams view={view} setView={setView} />
            </Route>
            <Route path="/users">
              <Users view={view} setView={setView} />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/admin">
              <Admin />
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
