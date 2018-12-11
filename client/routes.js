import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Navigation/Nav.js'
import Footer from './components/Navigation/Footer.js'
import Squares from './components/Pages/Squares.js'

class Router extends Component {
	render() {
		return(
			<BrowserRouter>
				<div className="nav-offset"> {/* TODO: Tell Emi what this class is for!*/}
					<Nav/>
					<Switch>
						{/* TODO: Add your first client-side route! Let's hook-up 'Squares' */}
						<Route path="/squares" component={Squares} />
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
			);
	}
}

export default Router;
