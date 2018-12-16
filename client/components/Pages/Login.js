import React, {Component} from 'react'
import '../../style/Login.css'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}

		// Bind the functions
	}

	// functions

	render() {
		return(
		    <div className="login-container">
				<h1>Login</h1>
                <div className="lgn-table"></div>
			</div>
		);
	}
}

export default Login;