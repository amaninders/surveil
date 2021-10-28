import './App.css';
import Header from './components/Header';
import Main from './components/Main/Index';
import Teams from './components/Teams/Index';
import Users from './components/Users/Index';

function App() {
  return (
    <div className="App">
			<Header />
			<Main />
			<Teams />
			<Users />
    </div>
  );
}

export default App;
