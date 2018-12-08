import React, {Component} from 'react'

let buttons = [
	{
		name: "Mac",
		link: "https://www.google.com",
	},
	{
		name: "iPhone",
		link: "https://www.google.com",
	},
	{
		name: "iPod",
		link: "https://www.google.com",
	},
	{
		name: "Dave",
		link: "https://www.google.com",
	},
]

class Router extends Component {
	render() {
		let cool = () => {
			alert("Hi");
		}
		return(
			<div>
				<div className="nav">
					{buttons.map(button => {
						return(<a onClick={cool} className="nav-button" target="_blank">{button.name}</a>)
					})}
					{/* <a className="nav-button" href="https://www.google.com" target="_blank">Beep</a>
					<a className="nav-button" href="https://www.gmail.com" target="_blank">Boop</a>
					<a className="nav-button" href="http://www.emijackson.com" target="_blank">Bop</a> */}
				</div>
			</div>
		);
	}
}

export default Router;
