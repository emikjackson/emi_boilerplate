import React, {Component} from 'react'
import '../../style/Login.css'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			keepSignedIn: true,
		};

		// Bind the functions
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleForgotPassword = this.handleForgotPassword.bind(this);
	}

	// functions
	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleForgotPassword() {
		alert('forgot password');
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
									<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
								</label>
							</div>
							<label>
								<input 
									name="keepSignedIn" 
									type="checkbox" 
									checked={this.state.keepSignedIn} 
									onChange={this.handleChange} />
									Keep me signed in
							</label>
							<br/>
							<input type="submit" value="Submit" />
						</form>
						<button onClick={this.handleForgotPassword}>
							Forgot password?
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;