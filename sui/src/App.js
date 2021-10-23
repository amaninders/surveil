import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main/Index';
import Nav from './components/Nav';

function App() {

	const [view, setView] = useState('Home')

  return (
    <div className="App">
			<Header />

			<div className="container-fluid">
			  <div className="row">
			    <Nav
						selected={view} 
						setView={setView}
					/>
					<Main view={view}/>
			  </div>
			</div>
		</div>
  );
}

export default App;
