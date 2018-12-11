import React, {Component} from 'react'

let buttons = [
	{
		name: "Advertising",
		link: "https://www.google.com",
	},
	{
		name: "Business",
		link: "https://www.google.com",
	},
	{
		name: "Privacy",
		link: "https://www.google.com",
	},
	{
		name: "Terms",
		link: "https://www.google.com",
    },
    {
		name: "Settings",
		link: "https://www.google.com",
	},
]

class Footer extends Component {
	render() {
		return(
				<div className="footer">
                    {buttons.map((button, idx) => {
						if (idx < 2) {
							return(<a key={`footer-${idx}`} className="nav-button left-nav-group" target="_blank">{button.name}</a>)
						} else {
							return(<a key={`footer-${idx}`} className="nav-button right-nav-group" target="_blank">{button.name}</a>)
						}
					})}
                </div>
		);
	}
}

export default Footer;
