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

class Nav extends Component {
	render() {
		let cool = () => {
			alert("Hi");
		}
		return(
				<div className="nav">
					{buttons.map(button => {
						return(<a onClick={cool} className="nav-button" target="_blank">{button.name}</a>)
					})}
				</div>
		);
	}
}

export default Nav;
