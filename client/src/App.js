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
import Main from './components/Main/Index';
import Navigator from './components/Navigator';
import Teams from './components/Teams/Index';
import Users from './components/Users/Index';

function App() {
  return (
    <div className="App">
			<Header />
			<main className="container py-5">
				<Navigator />
				<hr class="my-5" />
				<Main />
				<hr class="my-5" />
				<Teams />
				<Users />
			</main>
    </div>
  );
}

export default App;
