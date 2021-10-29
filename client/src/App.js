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

function App() {
  return (
    <div className="App">
			<Header />
			{/* <Landing /> */}
			<main className="container py-5">
				<Navigator menu={['home', 'team', 'user']} />
				<hr class="my-5" />
				<Main />
				<Teams />
				<Users />
			</main>
    </div>
  );
}

export default App;
