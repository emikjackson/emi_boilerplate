import React, {Component} from 'react'
import { getNavButtons } from '../../../data/buttons.js'

// TODO: Move 'buttons' json information to a data file.

let buttons = getNavButtons();

class Nav extends Component {
	render() {
		let cool = () => {
			alert("Hi");
		}
		return(
				<div className="nav">
					{buttons.map((button, idx) => {
						let nav_group = idx < 3 ? "left-nav-group" : "right-nav-group";
						if (button.isImage) {
							let image_classes = button.isProfilePic ? "profile-picture" : ""
							return(<img key={`nav-k${idx}`} className={`nav-button ${nav_group} nav-image ${image_classes}`} src={button.src} alt="Google squares"/>)
						} else {
							return(<a key={`nav-k${idx}`} href={button.link} className={`nav-button ${nav_group}`}>{button.name}</a>)
						}
					})}
					
				</div>
		);
	}
}

export default Nav;
