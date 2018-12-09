import React, {Component} from 'react'

let buttons = [
	{
		name: "Mac",
		link: "http://google.com",
	},
	{
		name: "iPad",
		link: "http://google.com",
	},
	{
		name: "iPhone",
		link: "http://google.com",
	},
	{
		name: "Watch",
		link: "http://google.com",
	},
	{
		name: "TV",
		link: "http://google.com",
	},
	{
		name: "Support",
		link: "http://google.com",
	},
]

class Router extends Component {
	render() {
		let cool = () => {   
			alert("HI");
		}
		return(
			<div>
				{/* Level 1.2 - abstract Nav to new React Component :) */}
				<div className="nav">
					{buttons.map(button => {
						return( <a onClick={cool} className="nav-button" >{button.name}</a> )
					})}
				</div>
			</div>
		);
	}
}

export default Router;
