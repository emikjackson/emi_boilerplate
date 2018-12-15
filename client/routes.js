import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Navigation/Nav.js'
import Footer from './components/Navigation/Footer.js'
import Squares from './components/Pages/Squares.js'
import Login from './components/Pages/Login.js'

class Router extends Component {
	render() {
		return(
			<BrowserRouter>
				<div className="nav-offset"> {/* So the body is not covered by the fixed nav bar*/}
					<Nav/>
					<Switch>
						<Route path="/squares" component={Squares}/>
						<Route path="/login" component={Login}/>
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
			);
	}
}

export default Router;
