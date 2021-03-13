import './App.scss';
import MainNavbar from './Components/MainNavbar';
import NavBar from './Components/NavBar';

function App() {
	return (
		<div className="outerWrap">
			<div className="App">
				<NavBar />
				<MainNavbar />
			</div>
			<div className="musicControls">Music Controls</div>
		</div>
	);
}

export default App;
