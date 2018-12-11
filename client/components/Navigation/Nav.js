import React, {Component} from 'react'

// TODO: Move 'buttons' json information to a data file.

let buttons = [
	{
		name: "About",
		link: "https://www.google.com",
		isImage: false,
	},
	{
		name: "SQUARES",
		link: "https://www.google.com", // TODO: Hook this up to the squares page!
		isImage: false,
	},
	{
		name: "Profile pic",
		link: "https://www.google.com",
		isImage: true,
		isProfilePic: true,
		src: "profile_pic.png",
	},
	{
		name: "Google bell",
		link: "https://www.google.com",
		isImage: true,
		isProfilePic: false,
		src: "notification-google.svg",
	},
	{
		name: "Google Squares",
		link: "https://www.google.com",
		isImage: true,
		isProfilePic: false,
		src: "squares-google.svg",
	},
	{
		name: "Images",
		link: "https://www.google.com",
		isImage: false,
	},
	{
		name: "Gmail",
		link: "https://www.google.com",
		isImage: false,
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
						let nav_group = idx < 2 ? "left-nav-group" : "right-nav-group";
						if (button.isImage) {
							let image_classes = button.isProfilePic ? "profile-picture" : ""
							return(<img key={`nav-k${idx}`} className={`nav-button ${nav_group} nav-image ${image_classes}`} src={button.src} alt="Google squares"/>)
						} else {
							return(<a key={`nav-k${idx}`} onClick={cool} className={`nav-button ${nav_group}`} target="_blank">{button.name}</a>)
						}
					})}
					
				</div>
		);
	}
}

export default Nav;
