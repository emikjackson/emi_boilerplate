import React, {Component} from 'react'

// TODO: Move 'buttons' json information to a data file.

let buttons = [
	{
		name: "About",
		link: "https://www.google.com",
	},
	{
		name: "SQUARES",
		link: "https://www.google.com", // TODO: Hook this up to the squares page!
	},
	{
		name: "Gmail",
		link: "https://www.google.com",
	},
	{
		name: "Images",
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
					{buttons.map((button, idx) => {
						if (idx < 2) {
							return(<a key={`nav-k${idx}`} onClick={cool} className="nav-button left-nav-group" target="_blank">{button.name}</a>)
						} else {
							return(<a key={idx} onClick={cool} className="nav-button right-nav-group" target="_blank">{button.name}</a>)
						}
						
					})}
				</div>
		);
	}
}

export default Nav;
