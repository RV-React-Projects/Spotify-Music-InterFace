import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PlaylistPages from '../Pages/PlaylistPages';
import Categories from './Categories';

function MainNavbar({ props }) {
	return (
		<div className="main">
			<div className="upperNav">
				{/* <div className="signup">
					<button>SIGN UP</button>
				</div>
				<div className="login">
					<button>LOGIN</button>
				</div> */}
			</div>
			<div className="mainContent" />
			<Switch>
				<Route path="/" exact component={Categories} />
				<Route path="/search">Search Page</Route>
				<Route path="/your-library">Library Page</Route>
				<Route path="/playlist/:id" component={PlaylistPages} />
			</Switch>
		</div>
	);
}

export default MainNavbar;
