import React, {Component} from 'react'
import '../../style/Login.css'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

		// Bind the functions
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	// functions
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	handleSubmit(event) {
		alert('username: ' + this.state.username + '\npassword:' + this.state.password);
		event.preventDefault();
	}

	render() {
		return(
		    <div className="login-container">
				<h1>Login</h1>
                <div className="lgn-table">
					<div className="logo"></div>
					<div className="text-box-container">
						<form onSubmit={this.handleSubmit}>
							<div className="text-box">
								<label>
									Username:
									<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
								</label>
							</div>
							<div className="text-box">
								<label>
									Password:
									<input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
								</label>
							</div>
							<input type="submit" value="Submit" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;